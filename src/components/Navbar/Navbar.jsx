import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { useEffect } from 'react'
import { SECTIONS } from '../../constants/sections'

function Navbar() {
  const [ activeSection, setActiveSection ] = useState(SECTIONS?.[0]?.name)

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection

      for (let i = 0; i < SECTIONS.length; i++) {
        const section = document.getElementById(SECTIONS[i].name)
        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = SECTIONS[i].name
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav>
      {
        SECTIONS?.map(e => 
          <Link onClick={() => setActiveSection(e.name)} key={e.id} to={e.name} smooth={true} duration={500}>
            <i className={`${e.icon} ${activeSection === e.name && 'active'}`}></i>
          </Link>
        )
      }
    </nav>
  )
}

export default Navbar