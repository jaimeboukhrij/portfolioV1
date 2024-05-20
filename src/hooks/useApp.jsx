import { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function useApp () {
  const { setActiveSection } = useContext(GlobalContext)

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.getElementsByClassName('section'))

      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          if (section.id) {
            setActiveSection(section.id)
          }
        }
      })

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
        setActiveSection('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setActiveSection])
}
