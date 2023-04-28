import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'Api',
    endpoints: (builder) => ({
        GetSummary: builder.query({})
    })
})