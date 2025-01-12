import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Addemployee from './pages/Addemployee'
import Entry from './pages/Entry'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[85%] sm:w-[75%] ml-3 lg:mx-auto'>
    <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/employee' element={<Addemployee/>}/>
        <Route path='/update/:id' element={<Addemployee/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App