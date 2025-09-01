import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

export type PuchasePayload = {
  products: Product[]
  delivery: {
    name: string
    address: string
    city: string
    zipCode: number
    homeNumber: string
    complement?: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
      }
      cardCode?: number
      cardNumber?: string
      expires?: {
        month: number
        year: number
      }
    }
  }
}

export type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<RestaurantType, void>({
      query: () => 'restaurantes'
    }),
    getHome: builder.query<RestaurantType[], void>({
      query: () => 'restaurantes'
    }),
    getPerfil: builder.query<RestaurantType, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PuchasePayload>({
      query: (data) => ({
        url: 'checkout',
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetHomeQuery,
  useGetPerfilQuery,
  usePurchaseMutation
} = api
export default api
