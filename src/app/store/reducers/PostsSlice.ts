import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPosts"
import { fetchPosts } from "./ActionCreators";

interface PostsState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: '',
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [fetchPosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default postsSlice.reducer;