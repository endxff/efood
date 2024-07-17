import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '../../pages/Home'

export const HeaderContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.header === 'home' ? 'column' : 'row')};
  height: ${(props) => (props.header === 'home' ? '384px' : '186px')};
  padding: ${(props) => (props.header === 'home' ? '40px 0' : '')};
  align-items: ${(props) => (props.header === 'home' ? '' : 'center')};
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  width: 540px;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  color: ${colors.rosa};
`

export const Background = styled.div`
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`

export const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 900px;
  text-align: center;
  color: ${colors.rosa};
`

export const Cart = styled.span`
  width: 100%;
  font-size: 18px;
  font-weight: 900;
  text-align: end;
  color: ${colors.rosa};
`

export const SubHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  justify-items: start;
  align-content: center;
  align-items: center;
  height: 186px;

  img {
    margin: auto;
  }
`
