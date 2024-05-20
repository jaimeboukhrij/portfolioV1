import { useContext } from 'react'
import MySkills from './MySkills'
import GlobalContext from '../../context/GlobalContext'

export default function Skills () {
  const { translated } = useContext(GlobalContext)
  return (
    <article className='flex flex-col gap-10 max-w-[850px] m-auto  py-20 px-6 sm:px-24 lg:max-w-none lg:px-28  '>
      <h2 className='text-4xl font-semibold mb-10 text-center'>
        {translated ? 'Skills' : 'Habilidades'}
      </h2>
      <article className='grid grid-cols-2 gap-6'>
        <MySkills />
      </article>
    </article>

  )
}
