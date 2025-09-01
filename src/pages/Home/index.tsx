import RestaurantList from '../../components/RestaurantList'
import HeaderHome from '../../components/HeaderHome'
import { useGetHomeQuery } from '../../Services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetHomeQuery()
  return (
    <>
      <HeaderHome />
      <RestaurantList perfis={restaurantes} isLoading={isLoading} />
    </>
  )
}

export default Home
