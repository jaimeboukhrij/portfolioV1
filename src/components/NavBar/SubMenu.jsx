import { motion } from 'framer-motion'
import { sections } from '../../constants'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export const SubMenu = ({ setIsOpen }) => {
  const { translated, activeSection, scrollToSection } = useContext(GlobalContext)
  return (
    <ul className='flex lg:gap-20 gap-14 flex-col lg:flex-row list-none items-center'>
      {
        sections.map(({ nameOrg, nameTrans, id }, index) => {
          return (
            <motion.div
              onClick={() => {
                scrollToSection(id)
                setIsOpen(prev => !prev)
              }}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15 }}
              className={` ${activeSection === id && 'text-primary'}`}
            >
              <span
                className='text-xl uppercase font-bold'
              >
                {translated ? nameTrans : nameOrg}
              </span>
            </motion.div>
          )
        })
      }
    </ul>
  )
}
