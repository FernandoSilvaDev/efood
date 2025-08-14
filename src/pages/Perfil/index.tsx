import { useParams } from 'react-router-dom'
import PerfilList from '../../components/PerfilList'
import HeaderPerfil from '../../components/HeaderPerfil'
import { useGetPerfilQuery } from '../../Services/api'
import Cart from '../../components/Cart'

const Perfis = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetPerfilQuery(id!)
  return (
    <>
      <HeaderPerfil />
      <Cart />
      <PerfilList menus={restaurante ? [restaurante] : []} />
    </>
  )
}

export default Perfis
