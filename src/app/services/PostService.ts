import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPosts';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        partialPosts: build.query<IPost[],number>({
            query: (page) => `/posts?_limit=20&_page=${page}`,
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            forceRefetch({currentArg, previousArg}) {
                return currentArg !== previousArg
            },
        }),
        getPostById: build.query<IPost, number>({
            query: (id: number) => `/posts/${id}`
        })
    })
})