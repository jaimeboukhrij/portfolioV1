import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { aboutMeOrg, aboutMeTrans } from '../../constants'
import { FaFileArchive } from 'react-icons/fa'
import profileImg from '../../assets/profile.jpg'
import pdf from '../../assets/JaimeBoukhrijResume.pdf'
export default function AboutMe () {
  const { translated } = useContext(GlobalContext)
  const paragraphs = translated ? aboutMeTrans.trim().split('\n') : aboutMeOrg.trim().split('\n')
  const handleDownload = () => {
    const pdfURL = pdf
    const link = document.createElement('a')
    link.href = pdfURL
    link.download = 'nombre-del-archivo.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section
      id='aboutme'
      className='section flex flex-col gap-10 max-w-[850px] m-auto  py-20 px-8 sm:px-24 lg:max-w-none lg:px-28  '
    >
      <h2 className='text-4xl px-4 max-w-[650px] font-semibold'>{translated ? 'About Me' : 'Sobre Mí'}</h2>
      <article className='flex flex-col items-center gap-20 lg:flex-row'>
        <div className='text-lg px-4 lg:w-1/2  dark:text-gray-400 text-gray-800 leading-[28px]  tracking-[1px] '>
          {paragraphs?.map((elem, index) => {
            return (
              <p className='my-3' key={index}>
                {index === 0 && <span className='text-primary mr-2'>{translated ? 'I am Jaime Boukhrij,' : 'Soy Jaime Boukhrij,'}</span>}
                {elem}
              </p>
            )
          })}
          <button
            onClick={handleDownload}
            className='px-4 p-2 w-full bg-primary hover:bg-primary/70 transition-all uppercase font-semibold text-white flex gap-5 items-center justify-center'
          >{translated ? 'DOWNLOAD CV' : 'DESCARGAR CV'}
            <FaFileArchive />
          </button>
        </div>
        <img
          className='mx-auto p-2 2xl:w-2/4 w-96 border border-primary max-w-[400px]'
          src={profileImg} alt='profile img'
        />
      </article>
    </section>
  )
}
