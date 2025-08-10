import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Logo, Title, ImageBanner, CategoryTitle } from './styles'
import bannerImg from '../../assets/img_logo/Vector.svg'

import logo from '../../assets/img_logo/logo.svg'
// import { Link } from 'react-router-dom'
import Button from '../Button'
import { RestaurantType } from '../../pages/Home'

// type Props = {
//   type: string
//   title: string
//   cover: string
// }

const HeaderPerfil = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurantes] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

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
          <Logo>
            <img src={logo} alt="eFood" />
          </Logo>
          <Button variant="secondary" type="link" to="#" title="Carrinho">
            0 produtos(s) no carrinho
          </Button>
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
