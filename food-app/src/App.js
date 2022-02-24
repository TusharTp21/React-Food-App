import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/React-Food-App/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
} 

export default App