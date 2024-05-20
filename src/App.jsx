import { Aside } from './components/Aside/Aside'
import GlobalOptions from './components/Aside/GlobalOptions'
import { SocialMedia } from './components/Aside/SocialMedia'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import useApp from './hooks/useApp'

function App () {
  useApp()
  return (
    <>
      <Aside><SocialMedia /></Aside>
      <Header />
      <Home />
      <Aside action><GlobalOptions /></Aside>

    </>
  )
}

export default App
