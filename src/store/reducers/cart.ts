import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Items, RestaurantType } from '../../pages/Home'

type CartState = {
  items: Items[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Items>) => {
      const food = state.items.find((item) => item.id === action.payload.id)
      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho.')
      }
    },
    open: (state) => {
      if (!state.isOpen) {
        state.isOpen = true
      } else {
        state.isOpen = false
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload)
    }
  }
})

export const { add, open, remove } = cartSlice.actions
export default cartSlice.reducer
