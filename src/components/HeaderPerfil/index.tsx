import { Image, Logo, Title, ImageBanner, CategoryTitle } from './styles'
import bannerImg from '../../assets/img_logo/Vector.svg'
import bannerImg2 from '../../assets/img_products/Pasta.jpg'

import logo from '../../assets/img_logo/logo.svg'
// import { Link } from 'react-router-dom'
import Button from '../Button'

const HeaderPerfil = () => (
  <div>
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Button variant="secondary" type="link" to="/" title="carrinho">
          Restaurantes
        </Button>
        <Logo>
          <img src={logo} alt="eFood" />
        </Logo>
        <Button variant="secondary" type="link" to="#" title="carrinho">
          0 produtos(s) no carrinho
        </Button>
      </div>
    </Image>
    <ImageBanner style={{ backgroundImage: `url(${bannerImg2})` }}>
      <div className="container">
        <div className="banner">
          <CategoryTitle>Italiana</CategoryTitle>
          <Title>La Dolce Vita Trattoria</Title>
        </div>
      </div>
    </ImageBanner>
  </div>
)

export default HeaderPerfil
