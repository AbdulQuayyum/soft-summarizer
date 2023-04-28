import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', `${import.meta.env.VITE_API_KEY}`);
            headers.set('X-RapidAPI-Host', `${import.meta.env.VITE_API_HOST}`);

            return headers;
        },
    }),

    endpoints: (builder) => ({
        GetSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.ArticleUrl)}&length=3`,
        })
    })
})