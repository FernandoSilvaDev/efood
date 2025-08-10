import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MenuList from '../../components/MenuList'
import HeaderPerfil from '../../components/HeaderPerfil'
import { RestaurantType } from '../Home'

const Perfis = () => {
  const { id } = useParams()
  // const [restaurante, setRestaurante] = useState<RestaurantType | null>(null)

  const [restaurante, setRestaurante] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])
  return (
    <>
      <HeaderPerfil />
      <MenuList menus={restaurante ? [restaurante] : []} />
    </>
  )
}

export default Perfis
