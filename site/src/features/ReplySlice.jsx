import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backend = process.env.REACT_APP_BACKEND_SERVER;

export const addReplyPost = createAsyncThunk('border/replyPost', async (replyContent, thunkAPI) => {
    const user = thunkAPI.getState().login;
    const postId = thunkAPI.getState().border.currentPostId;

    const response = await axios.post(`${backend}/reply/insert`, {
        content : replyContent,
        userId : user.id,
        postId : postId
    }, {withCredentials : true});

    return response.data;
})

export const ReplySlice = createSlice({
    name : "Reply",
    initialState : {
        Replys : []
    },
    reducers : {

    },
    extraReducers : builder => {
        builder
        .addCase(addReplyPost.fulfilled, (state, action) => {
            state.Replys.push(action.payload);
        })
    }
})