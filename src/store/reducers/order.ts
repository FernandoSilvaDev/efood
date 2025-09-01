import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderState {
  orderData: any | null
  isOpenOrder: boolean
}

const initialState: OrderState = {
  orderData: null,
  isOpenOrder: false
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openOrder: (state) => {
      state.isOpenOrder = true
    },
    closeOrder: (state) => {
      state.isOpenOrder = false
    },
    setOrderData: (state, action: PayloadAction<any>) => {
      state.orderData = action.payload
    }
  }
})

export const { openOrder, closeOrder, setOrderData } = orderSlice.actions
export default orderSlice.reducer
