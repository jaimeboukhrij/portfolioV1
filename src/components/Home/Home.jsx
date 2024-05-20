import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

export default function Home () {
  return (
    <main className='max-w-[1390px]  mt-[-424px sm: mt-0 '>
      <NavBar />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
