import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  

  return (
    <div className = 'mt-10 mx-auto max-w-6xl grid lg:grid-cols-[40%_60%] gap-x-10'>
      <LeftSection />
      <RightSection />
      </div>
  )
}

export default App
