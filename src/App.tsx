import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss, Container } from './styles'
import Product from './components/Product'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Banner />
      <Product />
      <Rodape />
    </>
  )
}

export default App
