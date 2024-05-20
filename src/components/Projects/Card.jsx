import { useContext } from 'react'
import { projects } from '../../constants'
import GlobalContext from '../../context/GlobalContext'
export default function Card () {
  const { translated } = useContext(GlobalContext)
  return (
    projects.map(({ name, img, technologies, descriptionTrans, descriptionOrg, url }) => {
      return (
        <a
          href={url}
          target='_blank'
          key={name} className='p-5 border border-primary flex flex-col gap-5 max-w-[500px] hover:bg-primary/5 hover:scale-105 transition-all'
        >
          <img className='w-full h-auto max-w-[230px] m-auto' src={`../../src/assets/${img}.jpg`} alt='' />
          <h5 className='text-2xl font-semibold text-center my-5'>{name}</h5>
          <p className='dark:text-gray-400  text-lg  mb-5'>{translated ? descriptionTrans : descriptionOrg}</p>
          <div className='flex items-center justify-center flex-wrap gap-3 mt-auto w-full'>
            {technologies.map(elem => <p key={elem}>{elem}</p>)}
          </div>
        </a>
      )
    })
  )
}
