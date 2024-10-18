import PgPrincipal from '../../models/PgPrincipal'
import { Card2 } from './styles'
import lista from '../../assets/images/lista.png'

export type Props = {
  pgprincipal: PgPrincipal[]
}

const Listagem = ({ pgprincipal }: Props) => (
  <Card2>
    <img src={lista} alt="Cardapio" />
  </Card2>
    {pgprincipal.map((pgprincipal) => (
    <Listagem 
      key={pgprincipal.id}
      image={pgprincipal.image}
    />
  ))}
)

export default Listagem
