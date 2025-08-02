import { Card, Descricao, Title } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const Menu = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      <div className="titleCard">
        <div>
          <Title>{title}</Title>
        </div>
      </div>
      <Descricao>{description}</Descricao>
      <Button type="button" to="/#" title="Saiba mais">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Menu
