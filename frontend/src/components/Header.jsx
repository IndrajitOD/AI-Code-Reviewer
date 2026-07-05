export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)] shrink-0">
      {/* Left: title & subtitle */}
      <div className="min-w-0">
        <h1 className="text-base md:text-[22px] font-bold text-slate-800 tracking-tight truncate">
          AI Code Reviewer
        </h1>
        <p className="hidden sm:block text-[13px] text-slate-400 mt-0.5">
          Paste your code and get an expert review instantly
        </p>
      </div>
    </header>
  )
}
