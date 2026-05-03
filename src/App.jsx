import React from 'react'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import AIAssistant from './components/common/AIAssistant'

function App() {
  return (
    <div className="min-h-screen selection:bg-neutral-800/50">
      <main>
        <Home />
      </main>
      <AIAssistant />
    </div>
  )
}

export default App
