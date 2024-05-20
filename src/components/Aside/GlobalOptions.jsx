import { useContext } from 'react'
import { BsTranslate } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa6'
import GlobalContext from '../../context/GlobalContext'

export default function GlobalOptions () {
  const { translated, handleTranslate } = useContext(GlobalContext)

  return (
    <>
      <li className='rounded-[999px] p-3 hover:bg-hover cursor-pointer'>
        <span><FaMoon size={25} /></span>
      </li>
      <li
        onClick={handleTranslate}
        className='rounded-[999px] p-3 hover:bg-hover cursor-pointer'
      >
        <span>
          <BsTranslate
            size={25}
            color={translated ? '#3eea2e' : 'white'}
          />
        </span>
      </li>
    </>
  )
}
