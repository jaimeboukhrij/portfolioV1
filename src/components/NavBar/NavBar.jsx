import { IoMenu } from 'react-icons/io5'
import GlobalOptions from '../Aside/GlobalOptions'
import Sections from './Sections'
import { SubMenu } from './SubMenu'
import { useRef, useState } from 'react'
import { BiX } from 'react-icons/bi'
import styles from './NavBar.module.css'

export default function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef(null)

  return (
    <nav
      className={`${styles.sticky} lg:my-20 py-5`}
      ref={navbarRef}
    >
      <section className='flex flex-col gap-16 px-10  sm:justify-center lg:hidden'>
        <div className='w-full flex justify-between sm:justify-center'>
          <span className='cursor-pointer'>
            {!isOpen
              ? (
                <IoMenu size={40} onClick={() => setIsOpen(prev => !prev)} />
                )
              : (
                <BiX size={40} onClick={() => setIsOpen(prev => !prev)} />
                )}
          </span>
          <ul className='flex flex-row justify-between items-center decoration-none sm:hidden'>
            <GlobalOptions />
          </ul>
        </div>
        {isOpen && <SubMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </section>
      <section className='hidden lg:flex justify-center gap-16'>
        <Sections />
      </section>
    </nav>
  )
}
