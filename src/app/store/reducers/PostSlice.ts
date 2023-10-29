import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPosts"
import { fetchPostById } from "./ActionCreators";

interface PostState {
    post: IPost;
    isLoading: boolean;
    error: string;
}

const initialState: PostState = {
    post: {body: '', id: 0, title: '', userId: 0},
    isLoading: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPostById.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.isLoading = false;
            state.error = '';
            state.post = action.payload;
        },
        [fetchPostById.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPostById.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default postSlice.reducer;