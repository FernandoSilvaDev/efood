import bannerImg from '../../assets/img_logo/Vector.svg'
import Instagran from '../../assets/img_logo/Instagran.png'
import Facebook from '../../assets/img_logo/facebook.png'
import Twitter from '../../assets/img_logo/twitter.png'
import logo from '../../assets/img_logo/logo.svg'
import { Logo, Image, Links, LinkItem, SubTitle } from './styles'

const Footer = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div>
      <div className="container">
        <Logo>
          <a href="#">
            <img src={logo} alt="eFood" />
          </a>
        </Logo>
        <Links>
          <LinkItem>
            <a href="#">
              <img src={Instagran} alt="Instagran" />
            </a>
          </LinkItem>
          <LinkItem>
            <a href="#">
              <img src={Facebook} alt="Facebook" />
            </a>
          </LinkItem>
          <LinkItem>
            <a href="#">
              <img src={Twitter} alt="Twitter" />
            </a>
          </LinkItem>
        </Links>
        <SubTitle>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </SubTitle>
      </div>
    </div>
  </Image>
)

export default Footer
