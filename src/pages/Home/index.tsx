import RestaurantList from '../../components/RestaurantList'
import Pratos from '../../models/Pratos'
import Sushi from '../../assets/img_products/Sushi.jpg'
import HeaderHome from '../../components/HeaderHome'

const Categorias: Pratos[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    grade: 4.9,
    title: 'Sushi'
  },
  {
    id: 2,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Japonesa'],
    grade: 4.3,
    title: 'Sushi'
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Japonesa'],
    grade: 3.9,
    title: 'Sushi'
  },
  {
    id: 4,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Japonesa'],
    grade: 4.2,
    title: 'Sushi'
  },
  {
    id: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Japonesa'],
    grade: 3.2,
    title: 'Sushi'
  },
  {
    id: 6,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    infos: ['Japonesa'],
    grade: 3.7,
    title: 'Sushi'
  }
]

const Home = () => (
  <>
    <HeaderHome />
    <RestaurantList pratos={Categorias} />
  </>
)

export default Home
