import Loader from '../Loader'
import Perfil from '../Perfil'
import { Container, List } from './styles'

export type Props = {
  menus: RestaurantType[]
  isLoading: boolean
}
const MenuList = ({ menus, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container className="container">
      <div>
        <List>
          {menus &&
            menus.map((item) =>
              item.cardapio.map((prato) => (
                <li key={prato.id}>
                  <Perfil
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
}

export default MenuList
