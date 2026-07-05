import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'

export default function ReviewCard({ review, loading, visible }) {
  return (
    <div className={`flex-1 bg-white rounded-2xl flex-col shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden min-w-0
      ${visible ? 'flex' : 'hidden'} md:flex`}>

      {/* Card header */}
      <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-300" />
          AI Review
        </div>

        {review && !loading && (
          <span className="text-[11px] font-medium bg-orange-50 text-orange-400 rounded-md px-2 py-0.5">
            Complete
          </span>
        )}
        {loading && (
          <span className="text-[11px] font-medium bg-teal-50 text-teal-400 rounded-md px-2 py-0.5 animate-pulse">
            Thinking...
          </span>
        )}
      </div>

      {/* Review body */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-5">
        {/* Empty state */}
        {!review && !loading && (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-slate-300">
            <span className="text-4xl md:text-5xl opacity-40">🔍</span>
            <p className="text-sm font-medium">Your review will appear here</p>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-slate-300">
            <span className="text-4xl md:text-5xl opacity-40">⚡</span>
            <p className="text-sm font-medium">Reviewing your code...</p>
          </div>
        )}

        {/* Review content */}
        {review && !loading && (
          <div className="review-prose">
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          </div>
        )}
      </div>
    </div>
  )
}
