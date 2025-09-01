import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { RootReducer } from '../../store'
import { closePayment } from '../../store/reducers/payment'
import { closeOrder } from '../../store/reducers/order'
import { CardContainer, Overlay, Sidebar } from './styles'

const Order = () => {
  const { isOpenOrder } = useSelector((state: RootReducer) => state.order)

  const orderData = useSelector((state: RootReducer) => state.order.orderData)
  const orderId = orderData?.orderId ?? 'ID não disponível'

  const dispatch = useDispatch()

  ///////////////////////////////Fecha o delivery clicando no Overlay
  const closeOverlay = () => {
    dispatch(closePayment())
  }

  // Abrir o delivery
  const closeTheOrder = () => {
    dispatch(closeOrder())
  }

  return (
    <CardContainer className={isOpenOrder ? 'is-openOrder' : ''}>
      <Overlay onClick={closeOverlay} />
      <Sidebar>
        <h3>Pedido realizado - {orderId}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button onClick={closeTheOrder} type="button" title="Concluir">
          Concluir
        </Button>
      </Sidebar>
    </CardContainer>
  )
}

export default Order
