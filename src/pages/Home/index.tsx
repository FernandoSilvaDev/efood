import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'

export interface RestaurantItem {
  type: 'image'
  url: string
}

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <HeaderHome />
      <RestaurantList perfis={restaurantes} />
    </>
  )
}

export default Home
