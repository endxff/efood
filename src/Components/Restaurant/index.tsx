import { Link } from 'react-router-dom'
import Button from '../Button'
import Rating from '../Rating'
import Tag from '../Tag'
import { ListItem, Description, Image, Title } from './styles'
import { TagContainer } from '../Tag/styles'

type Props = {
  name: string
  description: string
  category: string
  destacado: boolean
  image: string
  rating: string
  id: number
}

const Restaurant = ({
  name,
  description,
  category,
  image,
  rating,
  destacado,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 240) + '...'
    }

    return descricao
  }

  return (
    <ListItem>
      <Image src={image} alt={name} />
      <Title>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
      </Title>
      <Description>{getDescricao(description)}</Description>
      <Link to={`/restaurant/${id}`}>
        <Button />
      </Link>
      <TagContainer>
        <Tag>{category}</Tag>
        {destacado === true ? <Tag>Em Destaque</Tag> : ''}
      </TagContainer>
    </ListItem>
  )
}

export default Restaurant
