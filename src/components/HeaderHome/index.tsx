import { Image, Logo, Title } from './styles'
import bannerImg from '../../assets/img_logo/Vector.svg'

import logo from '../../assets/img_logo/logo.svg'

const HeaderHome = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Logo>
        <img src={logo} alt="eFood" />
      </Logo>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Image>
)

export default HeaderHome
