import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { SubHeader } from '../../Components/SubHeader/SubHeader'
import { RestaurantType } from '../Home'
import MenuList from '../../Components/MenuList'
import Item from '../../models/Item'
import marguerita from '../../Assets/marguerita.svg'
import { useGetMenuQuery } from '../../services/api'
import Cart from '../../Components/Cart'

type RestaurandId = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as RestaurandId
  const { data: menu } = useGetMenuQuery(id)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <SubHeader capa={menu.capa} titulo={menu.titulo} tipo={menu.tipo} />
      <div className="container">
        <MenuList menu={menu} />
      </div>
      <Cart />
    </>
  )
}

export default RestaurantPage
