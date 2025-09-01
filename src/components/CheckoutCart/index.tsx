import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/delivery'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  ///////////////////////////////// Função acomulador de preço
  const getTotalPrice = () => {
    return items.reduce((acumolator, valueCurrent) => {
      return (acumolator += valueCurrent.preco)
    }, 0) // Valor inicial 0
  }

  ///////////////////////////////Fecha o carrinho clicando no Overlay
  const closeCart = () => {
    dispatch(close())
  }

  /////////////////////////////// Função remover item do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  /////////////////////////////// Abrir Delivery
  const openTheDelivery = () => {
    dispatch(openDelivery())
    dispatch(close())
  }

  // Condição caso não aja item no carrinho
  if (items.length === 0) {
    return (
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <div className="container">
            <S.Message>Seu carrinho está vazio!</S.Message>
          </div>
          <Button
            onClick={closeCart}
            type="button"
            title="Voltar para as compras"
          >
            Voltar para as compras
          </Button>
        </S.Sidebar>
      </S.CartContainer>
    )
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item, index) => (
            <S.CartItem key={`${item.id}-${index}`}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{parseToBrl(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          <p>Valor total</p>
          <p>{parseToBrl(getTotalPrice())}</p>
        </S.Prices>
        <Button
          onClick={openTheDelivery}
          type="button"
          title="Continuar para entrega"
        >
          Continuar para entrega
        </Button>
        <Button
          onClick={closeCart}
          type="button"
          title="Voltar para as compras"
        >
          Voltar para as compras
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
