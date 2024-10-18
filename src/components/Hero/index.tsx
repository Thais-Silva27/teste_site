import { Link } from 'react-router-dom'
import { HeroBar } from './styles'
import hero from '../../assets/images/hero.png'

const Hero = () => (
  <HeroBar>
    <img src={hero} alt="eFood" />
    <nav>
      <Links>
        <LinkItem>
          <Link to="/home">Home</Link>
        </LinkItem>
        <LinkItem>
        <Link to="/categories">Categorias</Link>
        </LinkItem>
      </Links>
    </nav>
  </HeroBar>
)

export default Hero
