import Pratos from '../../models/Pratos'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  pratos: Pratos[]
}

const RestaurantList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato: Pratos) => (
          <Restaurant
            key={prato.id}
            description={prato.description}
            image={prato.image}
            infos={prato.infos}
            grade={prato.grade}
            title={prato.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
