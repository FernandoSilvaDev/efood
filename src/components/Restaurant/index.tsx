import { useEffect, useState } from 'react'
import Estrela from '../../assets/img_logo/estrela.svg'
import { Card, Descricao, Info, Grade, Title, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { RestaurantType } from '../../pages/Home'

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
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  //Caso não encontre o produto vem esta mensagem
  const restaurante = restaurantes.find(() => title)

  if (!restaurante) {
    return <h3>Carregando...</h3>
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
        <Button type="link" to={`/perfil/${id}`} title="Saiba mais">
          Saiba mais
        </Button>
      </Info>
    </Card>
  )
}

export default Restaurant
