import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Product
        key={restaurant.id}
        name={restaurant.name}
        description={restaurant.description}
        category={restaurant.category}
        infos={restaurant.infos}
        image={restaurant.image}
        rating={restaurant.rating}
        to={restaurant.to}
      />
    ))}
  </List>
)

export default ProductsList
