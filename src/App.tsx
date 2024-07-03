import { GlobalCss } from './styles'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
