import { useEffect, useState } from 'react'
import ProductsList from '../../Components/RestaurantList'
import Restaurant from '../../models/Restaurant'
import hioki from '../../Assets/hioki.png'
import trattoria from '../../Assets/trattoria.svg'
import Header from '../../Components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

// const restaurants: Restaurant[] = [
//   {
//     id: 1,
//     category: 'Japonesa',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     image: hioki,
//     infos: ['Destaque da semana'],
//     name: 'Hioki Sushi',
//     rating: '4.9',
//     to: '/japonesa'
//   },
//   {
//     id: 2,
//     category: 'Italiana',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: trattoria,
//     infos: [],
//     name: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     to: '/italiana'
//   },
//   {
//     id: 2,
//     category: 'Italiana',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: trattoria,
//     infos: [],
//     name: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     to: '/italiana'
//   },
//   {
//     id: 2,
//     category: 'Italiana',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: trattoria,
//     infos: [],
//     name: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     to: '/italiana'
//   },
//   {
//     id: 2,
//     category: 'Italiana',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: trattoria,
//     infos: [],
//     name: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     to: '/italiana'
//   },
//   {
//     id: 2,
//     category: 'Italiana',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: trattoria,
//     infos: [],
//     name: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     to: '/italiana'
//   }
// ]

export interface RestaurantType {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Items[]
}

export interface Items {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  header: 'home' | 'category'
  capa?: string
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header header="home" />
      <div className="container">
        <ProductsList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
