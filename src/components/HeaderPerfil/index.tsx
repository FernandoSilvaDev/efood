import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'

import bannerImg from '../../assets/img_logo/Vector.svg'
import IconCart from '../../assets/img_logo/carrinho.svg'
import logo from '../../assets/img_logo/logo.svg'

import Button from '../Button'
import { useGetPerfilQuery } from '../../Services/api'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

type RestauranteParams = {
  id: string
}

const HeaderPerfil = () => {
  const { id } = useParams() as RestauranteParams
  const { data: restaurantes } = useGetPerfilQuery(id)
  const dispatch = useDispatch()

  // Para contar items adicionado no carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  // Abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }

  if (!restaurantes) {
    return <Loader />
  }
  return (
    <div>
      <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <S.LogoMobile>
          <div>
            <img src={logo} alt="eFood" />
          </div>
        </S.LogoMobile>
        <div className="container">
          <Button variant="secondary" type="link" to="/" title="Restaurantes">
            Restaurantes
          </Button>
          <div className="logoDesck">
            <img src={logo} alt="eFood" />
          </div>
          <S.CartButton role="button" onClick={openCart} title="Carrinho">
            {items.length} <span> produto(s) no carrinho </span>
            <img src={IconCart} alt="Logo carrinho" />
          </S.CartButton>
        </div>
      </S.Image>
      <S.ImageBanner style={{ backgroundImage: `url(${restaurantes.capa})` }}>
        <div className="container">
          <div className="banner">
            <S.CategoryTitle>{restaurantes.tipo}</S.CategoryTitle>
            <S.Title>{restaurantes.titulo}</S.Title>
          </div>
        </div>
      </S.ImageBanner>
    </div>
  )
}

export default HeaderPerfil
