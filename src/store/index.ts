import { configureStore } from '@reduxjs/toolkit'
import api from '../Services/api'
import cartReducer from './reducers/cart'
import deliveryReducer from './reducers/delivery'
import paymentReducer from './reducers/payment'
import orderReducer from './reducers/order'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
    order: orderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
