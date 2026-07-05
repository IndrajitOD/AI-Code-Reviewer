const NAV_ITEMS = [
  { id: 'welcome', label: 'Home' },
  { id: 'about', label: 'About' },
]

export default function Sidebar({ currentRoute, onRouteContent }) {
  return (
    <nav className="hidden lg:flex w-32 bg-white rounded-2xl flex-col py-8 px-4 gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] shrink-0">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onRouteContent(item.id)}
          className={`w-full py-3 px-4 flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 border-0 cursor-pointer
            ${currentRoute === item.id || (currentRoute === 'app' && item.id === 'welcome')
              ? 'text-white shadow-md'
              : 'text-slate-500 hover:bg-teal-50 hover:text-teal-500 bg-transparent'
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
