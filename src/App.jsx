import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SideBar from './components/sideBar/SideBar'
function App() {


  return (
    <>
    <Home/>
    <SideBar/>
    {/* <div className='fixed inset-0 z-[200] bg-zinc-800/20 h-full'></div> */}
    </>
  )
}

export default App
