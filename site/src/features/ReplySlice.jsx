import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backend = process.env.REACT_APP_BACKEND_SERVER;

// 댓글 작성 기능 
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
// 댓글 수정 기능
export const editReply = createAsyncThunk('border/editReply', async (updateData) => {
    const response = await axios.put(`${backend}/reply/update`, updateData, {withCredentials:true})
    return response.data;
});
// 댓글 삭제 기능
export const deleteReply = createAsyncThunk('border/deleteReply', async (id) => {
    const response = await axios.delete(`${backend}/reply/delete`, {data : {id}, withCredentials:true });
    return response.data;
})
export const ReplySlice = createSlice({
    name : "Reply",
    initialState : {
        Replys : [],
        currentReplyId : null
    },
    reducers : {
        setCurrentReplyId: (state, action) => {
            state.currentReplyId = action.payload;
        }
    },
    extraReducers : builder => {
        builder
        .addCase(addReplyPost.fulfilled, (state, action) => {
            state.Replys.push(action.payload);
            console.log("댓글리듀서액션", action.payload.replyId); 
            state.currentReplyId = action.payload.replyId;
        })
        .addCase(editReply.fulfilled, (state, action) => {
            const index = state.Replys.findIndex(reply => reply.id === action.payload.id);
            if(index !== -1){
                state.Replys[index] = action.payload;
            }
        })
        .addCase(deleteReply.fulfilled, (state, action) => {
            state.Replys = state.Replys.filter(reply => reply.id !== action.payload.id);
        })
    }
})

export const { setCurrentReplyId } = ReplySlice.actions