import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";;

const backend = process.env.REACT_APP_BACKEND_SERVER;

// 대댓글 작성 기능
export const addRereplypost = createAsyncThunk('border/rereplyPost', async (rereplyContent, thunkAPI) => {
    const user = thunkAPI.getState().login;
    const replyId = thunkAPI.getState().reply.currentReplyId;
     
    
    try {
        const response = await axios.post(`${backend}/rereply/insert`, {
        content : rereplyContent,
        userId : user.id,
        replyId : replyId
    }, {withCredentials : true});
    
    return response.data;

    } catch (error) {
    console.error("Error during axios request:", error);
    throw error; 
    }
})
// 대댓글 수정 기능
export const editRereply = createAsyncThunk('border/editRereply', async (updateData) => {
    const response = await axios.put(`${backend}/rereply/update`, updateData, {withCredentials:true})
    return response.data;
})
// 대댓글 삭제 기능
export const deleteRereply = createAsyncThunk('border/deleteRereply', async (id) => {
    const response = await axios.delete(`${backend}/rereply/delete`, {data : {id}, withCredentials:true});
    
    return response.data;
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
            
            state.Rereplys.push(action.payload);
        })
        .addCase(editRereply.fulfilled, (state, action) => {
            const index = state.Rereplys.findIndex(rereply => rereply.id === action.payload.id);
            if(index !== -1){
                state.Rereplys[index] = action.payload;
            }
        })
        .addCase(deleteRereply.fulfilled, (state, action) => {
            state.Rereplys = state.Rereplys.filter(rereply => rereply.id !== action.payload.id);
        })
    }
})