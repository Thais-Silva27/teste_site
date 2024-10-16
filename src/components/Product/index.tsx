import { Card } from './styles'

import produtos from '../../assets/images/produtos.png'

const Product = () => (
  <Card>
    <img src={produtos} alt="Produtos" />
  </Card>
)

export default Product
