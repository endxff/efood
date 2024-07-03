import logo from '../../Assets/logo.svg'
import fundo from '../../Assets/fundo.svg'
import {
  Background,
  Cart,
  CategoryTitle,
  HeaderContainer,
  SubHeaderContainer,
  Title
} from './styles'

export type Props = {
  headerStyle: 'home' | 'category'
}

const Header = ({ headerStyle }: Props) => {
  const HeaderType = headerStyle
  if (HeaderType === 'home') {
    return (
      <Background style={{ backgroundImage: `url(${fundo})` }}>
        <HeaderContainer headerStyle={headerStyle}>
          <img src={logo} alt="efood"></img>
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </HeaderContainer>
      </Background>
    )
  } else
    return (
      <Background style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <SubHeaderContainer>
            <CategoryTitle>Restaurantes</CategoryTitle>
            <img src={logo} alt="efood"></img>
            <Cart>0 produto(s) no carrinho</Cart>
          </SubHeaderContainer>
        </div>
      </Background>
    )
}

export default Header
