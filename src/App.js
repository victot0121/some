import React from 'react'
import './global.css'
import LandingPage from './components/LandingPage'
import Fred from './components/Fred'
import {  Routes, Route} from 'react-router-dom'
import Solution from './components/Solution'
import Preditve from './components/Preditve'

function App() {
  return (
    <>
    <Routes>
        <Route  path='/' element={<LandingPage />}/>
        <Route  path='/solution' element={<Solution />}/>
        <Route  path='/Fred' element={<Fred />}/>
        <Route  path='/Preditve' element={<Preditve />}/>
    </Routes>  
    </>
  )
}

export default App
