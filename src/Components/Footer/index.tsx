import { FooterContainer, FooterDesc, Logo, SocialMedias } from './styles'
import logo from '../../Assets/logo.svg'
import instagram from '../../Assets/instagram.svg'
import facebook from '../../Assets/facebook.svg'
import twitter from '../../Assets/twitter.svg'

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Efood" />
      <SocialMedias>
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </SocialMedias>
      <FooterDesc>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterDesc>
    </FooterContainer>
  )
}

export default Footer
