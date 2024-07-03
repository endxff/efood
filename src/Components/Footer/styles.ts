import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.amarelo};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const SocialMedias = styled.div`
  margin-bottom: 80px;
  display: flex;

  :nth-child(2) {
    margin: 0 8px;
  }
`

export const FooterDesc = styled.p`
  width: 480px;
  font-size: 10px;
  text-align: center;
  color: ${colors.rosa};
`
