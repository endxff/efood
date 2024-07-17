import RestaurantModel from '../../models/Restaurant'
import { RestaurantType } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: RestaurantType[]
}

const ProductsList = ({ restaurants }: Props) => {
  console.log(restaurants.map)

  return (
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Restaurant
            name={restaurant.titulo}
            description={restaurant.descricao}
            category={restaurant.tipo}
            destacado={restaurant.destacado}
            image={restaurant.capa}
            rating={restaurant.avaliacao}
            id={restaurant.id}
          />
        </li>
      ))}
    </List>
  )
}

export default ProductsList
