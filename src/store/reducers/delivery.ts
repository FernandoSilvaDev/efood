import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DeliveryInfo = {
  name: string
  address: string
  city: string
  zipCode: number
  homeNumber: string
  complement: string
}

type DeliveryState = {
  isOpenDelivery: boolean
  info: DeliveryInfo
}

const initialState: DeliveryState = {
  isOpenDelivery: false,
  info: {
    name: '',
    address: '',
    city: '',
    zipCode: 0,
    homeNumber: '',
    complement: ''
  }
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    openDelivery: (state) => {
      state.isOpenDelivery = true
    },
    closeDelivery: (state) => {
      state.isOpenDelivery = false
    },
    setDeliveryInfo: (state, action: PayloadAction<DeliveryInfo>) => {
      state.info = action.payload
    }
  }
})

export const { openDelivery, closeDelivery, setDeliveryInfo } =
  deliverySlice.actions
export default deliverySlice.reducer
