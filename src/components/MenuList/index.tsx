import { RestaurantType } from '../../pages/Home'
import Menu from '../Menu'
import { Container, List } from './styles'

export type Props = {
  menus: RestaurantType[]
}
const MenuList = ({ menus }: Props) => (
  <Container className="container">
    <div>
      <List>
        {menus.map((item) =>
          item.cardapio.map((prato) => (
            <li key={prato.id}>
              <Menu
                id={prato.id}
                description={prato.descricao}
                image={prato.foto}
                name={prato.nome}
                portion={prato.porcao}
                price={prato.preco}
              />
            </li>
          ))
        )}
      </List>
    </div>
  </Container>
)

export default MenuList
