import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantType } from '../pages/Home'

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
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetHomeQuery,
  useGetPerfilQuery
} = api
export default api
