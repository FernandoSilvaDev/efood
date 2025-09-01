import Loader from '../Loader'
import Estrela from '../../assets/img_logo/estrela.svg'
import Tag from '../Tag'
import Button from '../Button'
import { useGetFeaturedRestaurantQuery } from '../../Services/api'

import { Card, Descricao, Info, Grade, Title, Infos } from './styles'

type Props = {
  id: number
  title: string
  description: string
  type: string
  image: string
  grade: number
  destacado: string
}

const Restaurant = ({
  id,
  title,
  description,
  type,
  image,
  grade,
  destacado
}: Props) => {
  const { data: restaurante } = useGetFeaturedRestaurantQuery()

  if (!restaurante) {
    return <Loader />
  }

  const getDescricao = (descricao: string) => {
    //Se descrição for maior que 95 corta (slice) a descrição, caso ao contrario retorna normalmente
    if (descricao.length > 100) {
      return descricao.slice(0, 310) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {destacado && <Tag>{destacado}</Tag>}
        <Tag>{type}</Tag>
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
        <Descricao>{getDescricao(description)}</Descricao>
        <Button
          type="link"
          to={`/perfil/${id}`}
          title={`Clique aqui para saber mais sobre o restaurante ${title}`}
        >
          Saiba mais
        </Button>
      </Info>
    </Card>
  )
}

export default Restaurant
