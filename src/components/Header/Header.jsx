import styles from './header.module.css'
import myAvatar from '../../assets/myAvatar.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
export const Header = () => {
  const { translated } = useContext(GlobalContext)
  return (
    <header className={styles.container}>
      <article className='h-[300px] mb-[10px]'>
        <motion.img
          initial={{ opacity: 0, scale: 0.1, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          src={myAvatar}
          alt='Logo'
          className={styles.avatar}
        />
      </article>
      <motion.section
        initial={{ opacity: 1, scale: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0 }}
        className='flex flex-col items-center justify-center gap-8'
      >
        <h3 className='text-md sm:text-xl lg:text-2xl font-thin tracking-[.15em] '>
          <span className=' text-[#3eea2e]'>(</span>
          JAIME BOUKHRIJ PEREZ
          <span className=' text-[#3eea2e]'>)</span>
        </h3>
        <div>
          <h3 className='text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight order-last py-2 text-center '>
            {translated ? 'Full-Stack' : 'Desarrollador'}
          </h3>
          <h3 className=' text-primary text-5xl sm:text-6xl lg:text-8xl  font-bold tracking-tight order-last py-2 text-center'>
            {translated ? 'Developer' : 'Full-Stack'}
          </h3>
        </div>
      </motion.section>
    </header>
  )
}
