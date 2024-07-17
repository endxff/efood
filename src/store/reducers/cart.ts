import { createSlice } from '@reduxjs/toolkit'
import { RestaurantType } from '../../pages/Home'

type CartState = {
  items: RestaurantType[]
}

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export default cartSlice.reducer
