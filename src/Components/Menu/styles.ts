import styled from 'styled-components'
import { colors } from '../../styles'
import { LinkButton } from '../Button/styles'

export const MenuItem = styled.li`
  background-color: ${colors.rosa};
  color: ${colors.branco};
  padding: 8px;
  max-width: 320px;
  max-height: 340px;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
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

  &:hover {
    cursor: pointer;
  }
`

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;

  &.open {
    display: flex;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin: 32px 0 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    margin-top: 24px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  max-height: 348px;
  background-color: ${colors.rosa};
  color: ${colors.branco};
`

export const ModalButton = styled(LinkButton)`
  background-color: ${colors.branco};
  color: ${colors.rosa};
  margin: 0;
`

export const ProductMedia = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin: 32px 24px 32px 32px;
`

export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  margin: 8px;
`
