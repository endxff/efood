import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.div`
  display: grid;
  padding-top: 80px;
  margin-bottom: 120px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 48px;
  color: ${colors.rosa};
  position: relative;
`
