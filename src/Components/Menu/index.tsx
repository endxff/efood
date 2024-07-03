import { AddButton, ItemDesc, ItemTitle, MenuItem } from './styles'
import marguerita from '../../Assets/marguerita.svg'
import Item from '../../models/Item'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

const Menu = ({ image, description, title, id }: Props) => (
  <MenuItem key={id}>
    <img src={image} alt="" />
    <ItemTitle>{title}</ItemTitle>
    <ItemDesc>{description}</ItemDesc>
    <AddButton>Adicionar ao carrinho</AddButton>
  </MenuItem>
)
export default Menu
