import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Items, RestaurantType } from '../../pages/Home'

type CartState = {
  items: Items[]
  isOpen: boolean
  isCheckout: boolean
  isPayment: boolean
  isOrder: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckout: false,
  isPayment: false,
  isOrder: false
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
    },
    checkout: (state) => {
      if (!state.isCheckout) {
        state.isCheckout = true
      } else {
        state.isCheckout = false
      }
    },
    payment: (state) => {
      if (!state.isPayment) {
        state.isPayment = true
      } else {
        state.isPayment = false
      }
    },
    order: (state) => {
      if (!state.isOrder) {
        state.isOrder = true
      } else {
        state.isOrder = false
        state.isPayment = false
        state.isCheckout = false
        state.isOpen = false
        state.items = []
      }
    }
  }
})

export const { add, open, remove, checkout, payment, order } = cartSlice.actions
export default cartSlice.reducer
