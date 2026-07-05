import { useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import prism from 'prismjs'

export default function CodeEditorCard({ code, onChange, language, onLanguageChange, loading, onReview, visible }) {
  useEffect(() => { prism.highlightAll() }, [code, language])

  const highlightCode = (code) => {
    // Fallback to text if language isn't loaded in prism (though core languages usually are)
    const prismLang = prism.languages[language] || prism.languages.javascript
    return prism.highlight(code, prismLang, language)
  }

  return (
    <div className={`flex-1 bg-white rounded-2xl flex-col shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden min-w-0
      ${visible ? 'flex' : 'hidden'} md:flex`}>

      {/* Card header */}
      <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
          Code Editor
        </div>
        
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          disabled={loading}
          className="text-[11px] font-medium bg-teal-50 text-teal-500 rounded-md px-2 py-1 border-0 outline-none cursor-pointer"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="php">PHP</option>
        </select>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-auto bg-[#fafcff]">
        <div className="code-editor-container">
          <Editor
            value={code}
            onValueChange={onChange}
            highlight={highlightCode}
            padding={14}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 13,
              minHeight: '100%',
              width: '100%',
              color: '#1a2940',
              lineHeight: '1.6',
            }}
          />
        </div>
      </div>

      {/* Review button */}
      <button
        onClick={onReview}
        disabled={loading}
        className={`mx-4 md:mx-5 my-3 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 border-0 shrink-0
          ${loading
            ? 'opacity-80 cursor-not-allowed'
            : 'cursor-pointer hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(78,205,196,0.4)]'
          }`}
        style={{
          background: 'linear-gradient(135deg, #4ecdc4, #44af69)',
          boxShadow: '0 4px 14px rgba(78,205,196,0.3)',
        }}
      >
        {loading ? '⏳ Analyzing code...' : '✦ Review My Code'}
      </button>
    </div>
  )
}
