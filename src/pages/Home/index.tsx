import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'
import { useGetHomeQuery } from '../../Services/api'

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
  const { data: restaurantes, isLoading } = useGetHomeQuery()
  if (restaurantes) {
    return (
      <>
        <HeaderHome />
        <RestaurantList perfis={restaurantes} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
