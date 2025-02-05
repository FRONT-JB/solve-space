import { Monaco, Editor as MonacoEditor } from '@monaco-editor/react';
import { defineMonacoThemes, LANGUAGE_CONFIG } from '../_constants';

export default function Editor({
  onChange,
  onMount,
}: {
  onChange: (value: string | undefined) => void;
  onMount: (editor: Monaco) => void;
}) {
  return (
    <div className="h-full relative bg-foreground rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
      <MonacoEditor
        language={LANGUAGE_CONFIG.javascript.monacoLanguage}
        theme="github-dark"
        defaultValue={LANGUAGE_CONFIG.javascript.defaultCode}
        beforeMount={defineMonacoThemes}
        onChange={onChange}
        onMount={onMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          padding: { top: 4, bottom: 4 },
          renderWhitespace: 'selection',
          fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
          fontLigatures: true,
          cursorBlinking: 'smooth',
          smoothScrolling: true,
          contextmenu: true,
          renderLineHighlight: 'all',
          lineHeight: 1.6,
          letterSpacing: 0.5,
          roundedSelection: true,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
        }}
      />
    </div>
  );
}
