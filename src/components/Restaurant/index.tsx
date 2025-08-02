import Estrela from '../../assets/img_logo/estrela.svg'
import { Card, Descricao, Info, Grade, Title, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  grade: number
}

const Restaurant = ({ title, description, infos, image, grade }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Info>
      <div className="titleCard">
        <div>
          <Title>{title}</Title>
        </div>
        <Grade>
          <h3>{grade}</h3>
          <img src={Estrela} alt="Estrela" />
        </Grade>
      </div>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/perfil" title="Saiba mais">
        Saiba mais
      </Button>
    </Info>
  </Card>
)

export default Restaurant
