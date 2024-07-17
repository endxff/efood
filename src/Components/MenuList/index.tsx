import { MenuContainer } from './styles'
import Menu from '../Menu'
import Item from '../../models/Item'
import { List } from '../RestaurantList/styles'
import { Items, RestaurantType } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'

export type Props = {
  menu: RestaurantType
}

const MenuList = ({ menu }: Props) => {
  return (
    <MenuContainer>
      {menu.cardapio.map((items) => (
        <Menu
          key={items.id}
          id={items.id}
          nome={items.nome}
          descricao={items.descricao}
          foto={items.foto}
          porcao={items.porcao}
          preco={items.preco}
        />
      ))}
    </MenuContainer>
  )
}

export default MenuList
