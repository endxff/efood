import styled from 'styled-components'
import { colors } from '../../styles'

export const MenuItem = styled.div`
  background-color: ${colors.rosa};
  color: ${colors.branco};
  padding: 8px;
`

export const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0 8px 0;
`

export const ItemDesc = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
`
export const AddButton = styled.button`
  width: 100%;
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.rosa};
`
