import Button from '../Button'
import Rating from '../Rating'
import { ListItem, Description, Image, Title } from './styles'
import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

type Props = {
  name: string
  description: string
  category: string
  infos: string[]
  image: string
  rating: string
  to: string
}

const Product = ({
  name,
  description,
  category,
  image,
  rating,
  infos,
  to
}: Props) => (
  <ListItem>
    <Image src={image} alt={name} />
    <Title>
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
    </Title>
    <Description>{description}</Description>
    <Link to={to}>
      <Button />
    </Link>
    <TagContainer>
      <Tag>{category}</Tag>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagContainer>
  </ListItem>
)

export default Product
