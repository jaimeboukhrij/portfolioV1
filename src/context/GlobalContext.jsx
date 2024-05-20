import React, { useState, createContext } from 'react'

const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
  const [translated, setTranslated] = useState(false)
  const [activeSection, setActiveSection] = useState('aboutme')

  const handleTranslate = () => {
    setTranslated(!translated)
  }
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId)
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = window.innerWidth > 1024 ? 0 : document.querySelector('nav').offsetHeight
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset - 40
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const data = { translated, handleTranslate, setActiveSection, activeSection, scrollToSection }
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export { ContextProvider }
export default GlobalContext
