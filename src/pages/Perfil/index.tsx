import MenuList from '../../components/MenuList'
import Menu from '../../models/Menu'
import Pizza from '../../assets/img_products/Pizza.jpg'
import HeaderPerfil from '../../components/HeaderPerfil'

const perfil: Menu[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: Pizza,
    title: 'Pizza'
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: Pizza,
    title: 'Pizza'
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: Pizza,
    title: 'Pizza'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: Pizza,
    title: 'Pizza'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: Pizza,
    title: 'Pizza'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: Pizza,
    title: 'Pizza'
  }
]

const Perfis = () => (
  <>
    <HeaderPerfil />
    <MenuList menus={perfil} />
  </>
)

export default Perfis
