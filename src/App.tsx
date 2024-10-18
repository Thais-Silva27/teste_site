/*import Banner from './components/Banner'
import Header from './components/Header'
import Product from './components/Product' */
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { GlobalCss, Container } from './styles'
import Rodape from './components/Rodape'

import Home from './Pages/Home'
import Categories from './Pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Categories />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Rodape />
      </Container>
      <Rotas />
    </BrowserRouter>
  )
}

export default App