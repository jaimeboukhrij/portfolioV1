import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { SocialMedia } from '../Aside/SocialMedia'

export default function Footer () {
  const { translated } = useContext(GlobalContext)

  return (
    <footer
      id='contact'
      className='section flex flex-col gap-10 max-w-[850px] m-auto  py-20 px-16 sm:px-24 lg:max-w-none lg:px-28  '
    >
      <button
        onClick={() => { window.location.href = 'mailto:jaimeboukhrijperez@gmail.com' }}
        className='px-4 p-5 w-full bg-primary hover:bg-primary/70 transition-all uppercase font-semibold text-white flex gap-5 items-center justify-center'
      >{translated ? 'SEND ME A MESSAGE @' : 'ENVIARME UN MENSAJE @'}
      </button>
      <ul className='flex m-auto sm:hidden'>
        <SocialMedia />
      </ul>
      <p className='text-muted font-monospace text-center'>Jaime Boukhrij Pérez 💚 2024 </p>
    </footer>
  )
}
