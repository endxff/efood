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
import { RestaurantType } from '../../pages/Home'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Menu = ({ foto, descricao, id, nome, porcao, preco }: Props) => {
  const [modal, SetModal] = useState('')
  const getDescricao = (descricao: string) => {
    if (descricao.length > 131) {
      return descricao.slice(0, 120) + '...'
    }

    return descricao
  }

  return (
    <>
      <MenuItem key={id}>
        <img src={foto} alt="" />
        <ItemTitle>{nome}</ItemTitle>
        <ItemDesc>{getDescricao(descricao)}</ItemDesc>
        <AddButton onClick={() => SetModal('open')}>Mais detalhes</AddButton>
      </MenuItem>
      <Modal className={modal === 'open' ? 'open' : ''}>
        <ModalContent className="container">
          <ProductMedia src={foto} alt="Imagem do produto" />
          <div>
            <h3>{nome}</h3>
            <p>
              {descricao}
              <span>Serve: {porcao}</span>
            </p>
            <ModalButton>
              Adicionar ao carrinho - {formataPreco(preco)}
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
