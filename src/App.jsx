import './App.css'

import About from './components/About/About'
import Education from './components/Education/Education'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Profile from './components/Profile/Profile'
import Skills from './components/Skills/Skills'
import Specializations from './components/Specializations/Specializations'
import Certifications from './components/Certifications/Certifications'

import { Element } from 'react-scroll'

function App() {

  return (
    <div className='app'>
      <Profile/>
      <Navbar/>
      <div className="app_container">
        <Element><Intro /></Element>
        <Element><About /></Element>
        <Element><Education /></Element>
        <Element><Certifications /></Element>
        <Element><Specializations /></Element>
        <Element><Skills /></Element>
        <Element><Portfolio /></Element>
      </div>
    </div>
  )
}

export default App