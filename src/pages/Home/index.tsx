import { useEffect, useState } from 'react'
import ProductsList from '../../Components/RestaurantList'
import Restaurant from '../../models/Restaurant'
import hioki from '../../Assets/hioki.png'
import trattoria from '../../Assets/trattoria.svg'
import Header from '../../Components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

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
