import { useState } from 'react'

import {
  AddButton,
  CloseButton,
  ItemDesc,
  ItemTitle,
  MenuItem,
  Modal,
  ModalButton,
  ModalContent,
  ProductMedia
} from './styles'

import margueritaModal from '../../Assets/marguerita_modal.png'
import closeButton from '../../Assets/close_button.png'
import { Items, RestaurantType } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  menu: Items
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Menu = ({ menu }: Props) => {
  const [modal, SetModal] = useState('')

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
    SetModal('')
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 131) {
      return descricao.slice(0, 120) + '...'
    }

    return descricao
  }

  return (
    <>
      <MenuItem key={menu.id}>
        <img src={menu.foto} alt="" />
        <ItemTitle>{menu.nome}</ItemTitle>
        <ItemDesc>{getDescricao(menu.descricao)}</ItemDesc>
        <AddButton onClick={() => SetModal('open')}>Mais detalhes</AddButton>
      </MenuItem>
      <Modal className={modal === 'open' ? 'open' : ''}>
        <ModalContent className="container">
          <ProductMedia src={menu.foto} alt="Imagem do produto" />
          <div>
            <h3>{menu.nome}</h3>
            <p>
              {menu.descricao}
              <span>Serve: {menu.porcao}</span>
            </p>
            <ModalButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(menu.preco)}
            </ModalButton>
          </div>
          <CloseButton
            src={closeButton}
            alt="Botão Fechar"
            onClick={() => SetModal('')}
          />
        </ModalContent>
        <div className="overlay" onClick={() => SetModal('')} />
      </Modal>
    </>
  )
}

export default Menu
