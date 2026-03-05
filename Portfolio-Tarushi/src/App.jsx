// import { useState } from 'react'
//css file
import './App.css'
//react components
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Me from './components/Me'

function App() {
  return (
    <div className="app-container">
      {/*Background magic particals*/ }
      <div className="magical-particles"></div>
      {/*Navigation Bar*/ }
      <nav className="navbar">
         <div className="logo">TV</div>
        <ul className="nav-links">
           <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
           <li ><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <main>
        <Home />
        <About />
         <Me/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer>
        <p>Created by Tarushi✨</p>
      </footer>
    </div>
  )
}

export default App
