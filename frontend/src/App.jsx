import { useState } from 'react'
import { useCodeReview } from './hooks/useCodeReview'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'
import Header from './components/Header'
import MobileTabSwitcher from './components/MobileTabSwitcher'
import CodeEditorCard from './components/CodeEditorCard'
import ReviewCard from './components/ReviewCard'
import Welcome from './components/Welcome'
import About from './components/About'
import './index.css'

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('welcome') // 'welcome', 'app', 'about'
  const [activeTab, setActiveTab] = useState('editor') // mobile only

  const { code, setCode, language, setLanguage, review, loading, reviewCode } = useCodeReview()

  async function handleReview() {
    await reviewCode()
    setActiveTab('review') // auto-switch to review on mobile after response
  }

  // Standalone Welcome Screen (no sidebar/header)
  if (currentRoute === 'welcome') {
    return <Welcome onStart={() => setCurrentRoute('app')} />
  }

  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-3 p-3 md:p-4 bg-slate-100 font-[Inter,sans-serif] relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="hidden md:block fixed top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-teal-400 blur-[60px] opacity-15 pointer-events-none z-0" />
      <div className="hidden md:block fixed bottom-[-80px] left-[100px] w-[250px] h-[250px] rounded-full bg-orange-300 blur-[60px] opacity-15 pointer-events-none z-0" />

      {/* Sidebar — desktop only */}
      <Sidebar currentRoute={currentRoute} onRouteContent={setCurrentRoute} />

      {/* Main content column */}
      <div className="relative z-10 flex-1 flex flex-col gap-3 md:gap-4 overflow-hidden min-w-0 min-h-0">
        
        <Header />

        {/* Content routing */}
        {currentRoute === 'about' && <About />}

        {currentRoute === 'app' && (
          <>
            {/* Tab switcher — mobile only */}
            <MobileTabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Side-by-side panels */}
            <div className="flex-1 flex gap-3 md:gap-4 overflow-hidden min-h-0">
              <CodeEditorCard
                code={code}
                onChange={setCode}
                language={language}
                onLanguageChange={setLanguage}
                loading={loading}
                onReview={handleReview}
                visible={activeTab === 'editor'}
              />
              <ReviewCard
                review={review}
                loading={loading}
                visible={activeTab === 'review'}
              />
            </div>
          </>
        )}

      </div>

      {/* Bottom nav — mobile only */}
      <BottomNav currentRoute={currentRoute} onRouteContent={setCurrentRoute} />
      
    </div>
  )
}