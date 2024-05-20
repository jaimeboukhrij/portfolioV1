import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { sections } from '../../constants'

export default function Sections () {
  const { translated, activeSection, scrollToSection } = useContext(GlobalContext)
  return (
    sections.map(({ nameOrg, nameTrans, id }, index) => {
      return (
        <div
          onClick={() => scrollToSection(id)}
          className={`text-xl cursor-pointer uppercase font-bold hover:scale-105 ${activeSection === id && 'text-primary'}`}
          key={index}
        >{translated ? nameTrans : nameOrg}
        </div>
      )
    })
  )
}
