import Hero from './components/Hero'
import Product from './components/Product'
import PgPrincipal from '../../models/PgPrincipal'

import banner from '../../assets/images/banner.png'
import produtos from '../../assets/images/produtos.png'

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

const Categorias = () => (
  <>
    <Hero />
    <Product pgprincipal={paginaum} />
  </>
)

export default Categorias
