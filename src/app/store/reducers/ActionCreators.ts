import axios from "axios";
import { IPost } from "../../models/IPosts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'post/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
            return response.data           
        } catch (error) {
            return thunkAPI.rejectWithValue("Can't load posts")
        }
    }
)

export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id)
            return response.data           
        } catch (error) {
            return thunkAPI.rejectWithValue("Can't load post")
        }
    }
)