import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'
import PgPrincipal from '../../models/PgPrincipal'

import hero from '../../assets/images/hero.png'
import lista from '../../assets/images/lista.png'

const paginaum: PgPrincipal[] = [
  {
    id: 1,
    image: 'hero'
  },
  {
    id: 2,
    image: 'lista'
  }
]

const Home = () => (
  <>
    <Hero />
    <Listagem pgprincipal={paginaum} />
  </>
)

export default Home
