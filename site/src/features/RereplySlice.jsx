import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";;

const backend = process.env.REACT_APP_BACKEND_SERVER;

// 대댓글 작성 기능
export const addRereplypost = createAsyncThunk('border/rereplyPost', async (rereplyContent, thunkAPI) => {
    const user = thunkAPI.getState().login;
    const replyId = thunkAPI.getState().reply.currentReplyId;
    console.log('replyId 전송:', replyId);  
    
    try {
        const response = await axios.post(`${backend}/rereply/insert`, {
        content : rereplyContent,
        userId : user.id,
        replyId : replyId
    }, {withCredentials : true});
    console.log(response);
    return response.data;

    } catch (error) {
    console.error("Error during axios request:", error);
    throw error; 
    }
})

export const RereplySlice = createSlice({
    name : "Rereply",
    initialState : {
        Rereplys : []
    },
    reducers : {

    },
    extraReducers : builder => {
        builder
        .addCase(addRereplypost.fulfilled, (state, action) => {
            console.log("대댓글리듀서액션",action);
            state.Rereplys.push(action.payload);
        })
    }
})