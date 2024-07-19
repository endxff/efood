import {
  CartContainer,
  DelButton,
  ItemsContainer,
  Overlay,
  Sidebar,
  TotalContainer
} from './styles'
import removeButton from '../../Assets/remover.png'
import { ModalButton } from '../Menu/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../Menu'
import { useState } from 'react'

import { open, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={openCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <ItemsContainer key={item.id}>
              <img src={item.foto} alt="Produto" />
              <div>
                <h4>{item.nome}</h4>
                <span>{formataPreco(item.preco)}</span>
                <DelButton
                  src={removeButton}
                  alt="Remover"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            </ItemsContainer>
          ))}
        </ul>
        <TotalContainer>
          <span>Valor total</span>
          <span>{formataPreco(getTotalPrice())}</span>
        </TotalContainer>
        <ModalButton>Continuar com a entrega</ModalButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
