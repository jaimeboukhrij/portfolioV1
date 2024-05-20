import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import Card from './Card'

export default function Projects () {
  const { translated } = useContext(GlobalContext)
  return (
    <section
      id='projects'
      className='section flex flex-col gap-10 max-w-[850px] m-auto  py-20 px-3  sm:px-24 lg:max-w-none lg:px-28  '
    >
      <h2 className='text-4xl px-8 max-w-[650px] font-semibold'>{translated ? 'Projects' : 'Proyetos'}</h2>
      <article className='grid px-8 justify-center gap-12 lg:grid-cols-2'>
        <Card />
      </article>
    </section>
  )
}
