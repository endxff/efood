import styled from 'styled-components'
import { colors } from '../../styles'
import { ModalButton } from '../Menu/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.isOpen {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.rosa};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  ${ModalButton} {
    width: 100%;
  }
`

export const ItemsContainer = styled.li`
  display: flex;
  background-color: ${colors.amarelo};
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  color: ${colors.rosa};
  position: relative;

  > img {
    object-fit: cover;
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    line-height: 22px;
  }
`
export const DelButton = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0 16px;
  color: ${colors.branco};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
