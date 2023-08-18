import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";;

export const addPost = createAsyncThunk('/border/addPost', async (postContent, thunkAPI) => {
    const user = thunkAPI.getState().login; // store에 있는 로그인 리듀서
    
    const response = await axios.post('http://localhost:8080/post/insert', {
      title: postContent.title,
      content : postContent.content,
      userId: user.nickname, 
      // 여기에 필요한 다른 사용자 정보 추가
    },{withCredentials : true});
  
    return response.data;
  });

export const BorderSlice = createSlice({
    name : "Border",
    initialState : {
        Posts : []
    },
    reducers : {
        add : (state, action) => {
            state.posts.push(action.payload)
        },
        edit : (state, action) => {
            const { content, index } = action.payload;
            state.posts[index] = content;
        },
        deleted : (state, action) => {
            state.posts.splice(action.payload, 1);
        }
    }, 
    extraReducers : builder => {
        builder
            .addCase(addPost.fulfilled, (state, action) => {
                console.log("ad",action)
                state.Posts.push(action.payload);
            });
    }
})

export const { add, edit, deleted} = BorderSlice.actions