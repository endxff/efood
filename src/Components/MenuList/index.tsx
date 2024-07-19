import { MenuContainer } from './styles'
import Menu from '../Menu'
import Item from '../../models/Item'
import { List } from '../RestaurantList/styles'
import { Items, RestaurantType } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'
import { useDispatch } from 'react-redux'

export type Props = {
  menu: RestaurantType
}

const MenuList = ({ menu }: Props) => {
  return (
    <MenuContainer>
      {menu.cardapio.map((items) => (
        <Menu key={items.id} menu={items} />
      ))}
    </MenuContainer>
  )
}

export default MenuList
