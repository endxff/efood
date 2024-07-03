import Menu from '../Components/Menu'
import Item from '../models/Item'
import { MenuContainer } from './styles'

export type Props = {
  item: Item[]
}

const MenuList = ({ item }: Props) => (
  <MenuContainer>
    {item.map((itens) => (
      <Menu
        key={itens.id}
        id={itens.id}
        title={itens.title}
        description={itens.description}
        image={itens.image}
      />
    ))}
  </MenuContainer>
)

export default MenuList
