import styled from 'styled-components'
import { LinkButton } from '../Button/styles'

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const TagItem = styled(LinkButton)`
  font-size: 12px;
  margin: 0px 0px 0px 8px;
  line-height: 14px;
`
