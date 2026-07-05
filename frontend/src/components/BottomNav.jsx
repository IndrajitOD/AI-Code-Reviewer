const NAV_ITEMS = [
  { id: 'welcome', label: 'Home' },
  { id: 'about', label: 'About' },
]

export default function BottomNav({ currentRoute, onRouteContent }) {
  return (
    <nav className="lg:hidden bg-white rounded-2xl flex items-center justify-around px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] shrink-0">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onRouteContent(item.id)}
          className={`flex-1 flex justify-center items-center py-2.5 mx-2 rounded-xl text-sm font-semibold transition-all duration-200 border-0 cursor-pointer
            ${currentRoute === item.id || (currentRoute === 'app' && item.id === 'welcome')
              ? 'text-white shadow-md'
              : 'text-slate-500 bg-transparent'
            }`}
          style={currentRoute === item.id || (currentRoute === 'app' && item.id === 'welcome')
            ? { background: 'linear-gradient(135deg, #4ecdc4, #44af69)' }
            : {}
          }
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
