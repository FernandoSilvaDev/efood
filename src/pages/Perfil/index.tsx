import { useParams } from 'react-router-dom'

import PerfilList from '../../components/PerfilList'
import HeaderPerfil from '../../components/HeaderPerfil'
import Cart from '../../components/CheckoutCart'
import Delivery from '../../components/CheckoutDelivery'
import Checkout from '../../components/CheckoutPayment'
import Order from '../../components/CheckoutOrder'
import { useGetPerfilQuery } from '../../Services/api'

const Perfis = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetPerfilQuery(id || '')
  return (
    <>
      <HeaderPerfil />
      <Order />
      <Checkout />
      <Delivery />
      <Cart />
      <PerfilList
        menus={restaurante ? [restaurante] : []}
        isLoading={isLoading}
      />
    </>
  )
}

export default Perfis
