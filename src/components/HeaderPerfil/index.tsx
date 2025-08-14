import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Image, Title, ImageBanner, CategoryTitle, CartButton } from './styles'
import bannerImg from '../../assets/img_logo/Vector.svg'

import logo from '../../assets/img_logo/logo.svg'
// import { Link } from 'react-router-dom'
import Button from '../Button'
import { useGetPerfilQuery } from '../../Services/api'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const { id } = useParams()
  const { data: restaurantes } = useGetPerfilQuery(id!)
  const dispatch = useDispatch()

  // Para contar items adicionado no carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  // Abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }
  return (
    <div>
      <Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <Button variant="secondary" type="link" to="/" title="Restaurantes">
            Restaurantes
          </Button>
          <div>
            <img src={logo} alt="eFood" />
          </div>
          <CartButton onClick={openCart} type="link" title="Carrinho">
            {items.length} produto(s) no carrinho
          </CartButton>
        </div>
      </Image>
      <ImageBanner style={{ backgroundImage: `url(${restaurantes.capa})` }}>
        <div className="container">
          <div className="banner">
            <CategoryTitle>{restaurantes.tipo}</CategoryTitle>
            <Title>{restaurantes.titulo}</Title>
          </div>
        </div>
      </ImageBanner>
    </div>
  )
}

export default HeaderPerfil
