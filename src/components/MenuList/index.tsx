import Menus from '../../models/Menu'
import Menu from '../Menu'
import { Container, List } from './styles'

export type Props = {
  menus: Menus[]
}

const MenuList = ({ menus }: Props) => (
  <Container className="container">
    <div>
      <List>
        {menus.map((menu: Menus) => (
          <Menu
            key={menu.id}
            description={menu.description}
            image={menu.image}
            title={menu.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList
