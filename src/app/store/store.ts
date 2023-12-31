import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from './reducers/PostsSlice';
import postReducer from './reducers/PostSlice';
import { postApi } from "../services/PostService";


const rootReducer = combineReducers({
    postsReducer,
    postReducer,
    [postApi.reducerPath]: postApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']