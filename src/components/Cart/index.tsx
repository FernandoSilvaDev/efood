import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styled'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

/////////////////////////////////// Função para formatação de moedas de diferentes tipos
export const formataPreco = (preco = 0) => {
  // Intl. é uma API nativa do JavaScript, parte do objeto global, - 'pt-BR' define o local e (idioma e formato regional)
  return new Intl.NumberFormat('pt-BR', {
    // style: 'currency' e currency: 'BRL' diz que o estilo é moeda e a moeda é Real brasileiro (BRL).
    style: 'currency',
    currency: 'BRL'
  }).format(preco) //.format(preco) aplica essa formatação ao número recebido.
}

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

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <Button type="button" title="Continuar para entrega">
          Continuar para entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
