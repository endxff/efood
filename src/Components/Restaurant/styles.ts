import styled from 'styled-components'
import { colors } from '../../styles'

export const ListItem = styled.div`
  width: 472px;
  position: relative;
  border: 1px solid ${colors.rosa};
  h2 {
    font-size: 18px;
  }
`

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 220px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 8px 8px 0px 8px;
`

export const Description = styled.div`
  font-size: 14px;
  line-height: 22px;
  padding: 16px 0;
  margin: 0 8px;
`
