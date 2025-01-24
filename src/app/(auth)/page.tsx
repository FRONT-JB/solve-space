"use client";

import { useState } from "react";
import Editor from "./ui/Editor";
import Output from "./ui/Output";
import { LANGUAGE_CONFIG } from "./constants";

export default function Home() {
  const [value, setValue] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState("");
  const [executionResult, setExecutionResult] = useState<{
    code: string;
    output: string;
    error: string | null;
  }>({
    code: "",
    output: "",
    error: null,
  });

  const handleChange = (value: string | undefined) => {
    if (!value) return;

    setValue(value);
  };

  const runCode = async () => {
    if (!value) {
      setError("Please enter some code");
      return;
    }

    setIsRunning(true);
    setError(null);
    setOutput("");

    try {
      const runtime = LANGUAGE_CONFIG["javascript"].pistonRuntime;
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: runtime.language,
          version: runtime.version,
          files: [{ content: value }],
        }),
      });

      const data = await response.json();

      // handle API-level erros
      if (data.message) {
        setError(data.message);
        return;
      }

      // handle compilation errors
      if (data.compile && data.compile.code !== 0) {
        const error = data.compile.stderr || data.compile.output;
        setError(error);
        setExecutionResult({
          code: value,
          output: "",
          error,
        });
        return;
      }

      if (data.run && data.run.code !== 0) {
        const error = data.run.stderr || data.run.output;
        setError(error);
        setExecutionResult({
          code: value,
          output: "",
          error,
        });
        return;
      }

      // if we get here, execution was successful
      const output = data.run.output;

      setOutput(output.trim());
      setError(null);
      setExecutionResult({
        code: value,
        output: output.trim(),
        error: null,
      });
    } catch (error) {
      console.log("Error running code:", error);
      setError("Error running code");
      setExecutionResult({
        code: value,
        output: "",
        error: "Error running code",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="h-full max-w-[1420px] mx-auto p-4">
      <button type="button" onClick={runCode}>
        Run
      </button>

      <div className="flex flex-col gap-4 h-[calc(100%-36px)]">
        <Editor onChange={handleChange} />

        <Output isRunning={isRunning} output={output} error={error} />
      </div>
    </div>
  );
}
