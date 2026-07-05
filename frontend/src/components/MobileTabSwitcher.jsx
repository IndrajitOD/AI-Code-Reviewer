export default function MobileTabSwitcher({ activeTab, onTabChange }) {
  return (
    <div className="flex md:hidden bg-white rounded-2xl p-1 shadow-[0_2px_12px_rgba(0,0,0,0.05)] shrink-0">
      <button
        onClick={() => onTabChange('editor')}
        className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border-0 cursor-pointer
          ${activeTab === 'editor' ? 'text-white shadow-md' : 'text-slate-400 bg-transparent'}`}
        style={activeTab === 'editor' ? { background: 'linear-gradient(135deg, #4ecdc4, #44af69)' } : {}}
      >
        ✏️ Editor
      </button>

      <button
        onClick={() => onTabChange('review')}
        className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border-0 cursor-pointer
          ${activeTab === 'review' ? 'text-white shadow-md' : 'text-slate-400 bg-transparent'}`}
        style={activeTab === 'review' ? { background: 'linear-gradient(135deg, #f6a085, #f7ce68)' } : {}}
      >
        🔍 Review
      </button>
    </div>
  )
}
