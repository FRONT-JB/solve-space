'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useCallback, useEffect, useState } from 'react';
import { Monaco } from '@monaco-editor/react';
import { LANGUAGE_CONFIG } from './_constants';
import { CreateSnippets, Editor, Output } from './_components';

const EDITOR_DEFAULT_SIZE = 60;
const OUTPUT_DEFAULT_SIZE = 40;

export default function SnippetsPage() {
  const [value, setValue] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState('');
  const [editor, setEditor] = useState<Monaco | null>(null);

  // const [executionResult, setExecutionResult] = useState<{
  //   code: string;
  //   output: string;
  //   error: string | null;
  // }>({
  //   code: "",
  //   output: "",
  //   error: null,
  // });

  const handleChange = (value: string | undefined) => {
    if (!value) return;

    setValue(value);
  };

  const runCode = useCallback(async () => {
    if (!value) {
      setError('Please enter some code');
      return;
    }

    setIsRunning(true);
    setError(null);
    setOutput('');

    try {
      const runtime = LANGUAGE_CONFIG['javascript'].pistonRuntime;
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        // TODO: 백엔드 로직 추가 후 로직 구현
        // setExecutionResult({
        //   code: value,
        //   output: "",
        //   error,
        // });
        return;
      }

      if (data.run && data.run.code !== 0) {
        const error = data.run.stderr || data.run.output;
        setError(error);
        // TODO: 백엔드 로직 추가 후 로직 구현
        // setExecutionResult({
        //   code: value,
        //   output: "",
        //   error,
        // });
        return;
      }

      // if we get here, execution was successful
      const output = data.run.output;

      setOutput(output.trim());
      setError(null);
      // TODO: 백엔드 로직 추가 후 로직 구현
      // setExecutionResult({
      //   code: value,
      //   output: output.trim(),
      //   error: null,
      // });
    } catch (error) {
      console.log('Error running code:', error);
      setError('Error running code');
      // TODO: 백엔드 로직 추가 후 로직 구현
      // setExecutionResult({
      //   code: value,
      //   output: "",
      //   error: "Error running code",
      // });
    } finally {
      setIsRunning(false);
    }
  }, [value]);

  const handleEditorMount = (editor: Monaco) => {
    setEditor(editor);
  };

  useEffect(() => {
    if (!editor && !LANGUAGE_CONFIG['javascript'].defaultCode) return;

    editor?.setValue(LANGUAGE_CONFIG['javascript'].defaultCode);
  }, [editor]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'Enter') {
        runCode();
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [runCode]);

  return (
    <div className="flex flex-col gap-4 h-[calc(100%-32px)]">
      <CreateSnippets value={value} />

      <ResizablePanelGroup className="w-full" direction="vertical">
        <ResizablePanel defaultSize={EDITOR_DEFAULT_SIZE}>
          <Editor onChange={handleChange} onMount={handleEditorMount} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={OUTPUT_DEFAULT_SIZE}>
          <Output isRunning={isRunning} output={output} error={error} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
