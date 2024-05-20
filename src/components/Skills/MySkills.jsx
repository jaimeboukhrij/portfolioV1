import { BsGithub } from 'react-icons/bs'
import { FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa'
import { SiExpress, SiJquery, SiMongodb, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'

const formatIcon = {
  color: '#3eea2e',
  size: '100%'
}

const allSkills = [
  {
    name: 'React',
    icon: <FaReact color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'JavaScript',
    icon: <FaJs color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'NodeJS',
    icon: <FaNode color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'Express',
    icon: <SiExpress color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'Mongodb',
    icon: <SiMongodb color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'Git',
    icon: <BsGithub color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'HTML5',
    icon: <FaHtml5 color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs color={formatIcon.color} size={formatIcon.size} />

  },
  {
    name: 'JQuery',
    icon: <SiJquery color={formatIcon.color} size={formatIcon.size} />

  }
]

export default function MySkills () {
  return (
    allSkills.map(({ name, icon }, index) => {
      return (
        <motion.div
          key={name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.10 }}
          className='flex justify-center items-center gap-4'
        >
          <span className='min-w-[100px] font-semibold text-lg text-start  lg:w-[150px] sm:text-xl lg:text-2xl'>{name}</span>
          <span className='w-[25px] h-auto lg:w-[30px]'>{icon}</span>
        </motion.div>
      )
    })
  )
}
