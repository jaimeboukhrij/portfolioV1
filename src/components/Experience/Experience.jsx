import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { experience } from '../../constants'
import { motion } from 'framer-motion'

export default function Experience () {
  const { translated } = useContext(GlobalContext)
  return (
    <section
      id='experience'
      className='section flex flex-col gap-10 max-w-[850px] m-auto  py-20 px-3 sm:px-24 lg:max-w-none lg:px-28  '
    >
      <h2 className='text-4xl px-8 max-w-[650px] font-semibold'>{translated ? 'Experience' : 'Experiencia'}</h2>
      <article>
        {
          experience.map(({ name, date, descriptionTrans, descriptionOrg, functionTrans, functionOrg }) => {
            return (
              <motion.section
                key={name}
                initial={{ opacity: 1, scale: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0 }}
                className='flex justify-center items-center gap-4 mb-12 px-10 sm:px-0 '
              >
                <div className='flex flex-col gap-2'>
                  <p className='flex text-2xl  gap-3 items-center font-semibold text-white'>
                    <span>{name}</span>
                    <span className='text-lg'>({date})</span>
                  </p>
                  <p className='text-xl text-primary'>{translated ? functionTrans : functionOrg}</p>
                  <p className='dark:text-gray-400 text-gray-800 text-lg  mb-5'>
                    {translated ? descriptionTrans : descriptionOrg}
                  </p>
                </div>

              </motion.section>
            )
          })
        }
      </article>

    </section>
  )
}
