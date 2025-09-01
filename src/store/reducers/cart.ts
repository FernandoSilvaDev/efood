import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: RestaurantType['cardapio'][number][] // array de pratos
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
    add: (state, action: PayloadAction<RestaurantType['cardapio'][number]>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      // Para adicionar 1 item com mesmo id e poder remover unidade sem remover todos
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
