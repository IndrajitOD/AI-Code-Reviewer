export default function Welcome({ onStart }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-100 font-[Inter,sans-serif] relative overflow-hidden p-6">
      
      {/* Decorative blobs */}
      <div className="fixed top-[-100px] right-[-50px] w-[400px] h-[400px] rounded-full bg-teal-400 blur-[80px] opacity-20 pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] left-[-50px] w-[350px] h-[350px] rounded-full bg-orange-300 blur-[80px] opacity-20 pointer-events-none z-0" />

      {/* Main Card */}
      <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl p-10 md:p-16 text-center shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center">
        
        {/* Icon/Logo */}
        <div 
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-4xl mb-8 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #4ecdc4, #44af69)', boxShadow: '0 8px 24px rgba(78,205,196,0.3)' }}
        >
          ✦
        </div>

        {/* Text content */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight mb-4">
          AI Code Reviewer
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">
          Elevate your code quality with instant, AI-powered expert reviews. Catch bugs, improve performance, and follow best practices effortlessly.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">⚡ Lightning Fast</span>
          <span className="bg-orange-50 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">🧠 Llama 3.3 Intelligence</span>
          <span className="bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-semibold">🔒 100% Private</span>
        </div>

        {/* Call to Action */}
        <button
          onClick={onStart}
          className="group relative px-8 py-4 bg-teal-500 text-white rounded-2xl text-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(78,205,196,0.4)] overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4ecdc4, #44af69)' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Reviewing Code <span>→</span>
          </span>
        </button>

      </div>
    </div>
  )
}
