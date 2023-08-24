import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backend = process.env.REACT_APP_BACKEND_SERVER;

// 글 추가 
export const addPost = createAsyncThunk('/border/addPost', async (postContent, thunkAPI) => {
    const user = thunkAPI.getState().login; // store에 있는 로그인 리듀서
    
    const response = await axios.post(`${backend}/post/insert`, {
      title: postContent.title,
      content : postContent.content,
      userId: user.id
      
      // 여기에 필요한 다른 사용자 정보 추가
    }, {withCredentials : true});

    const postId = response.data.id;
  
    return { ...response.data, postId };
  });

// 글 수정
export const editPost = createAsyncThunk('/border/editPost', async(postContent, thunkAPI) => {
    const user = thunkAPI.getState().login;

    const response = await axios.post(`${backend}/post/update`, {
        title: postContent.title,
        content: postContent.content,
        userId : user.id
        
    },{withCredentials : true});
    console.log("글 수정",response)
    return response.data;
})

export const BorderSlice = createSlice({
    name : "Border",
    initialState : {
        Posts : [],
        currentPostId: null 
    },
    reducers : {
        add : (state, action) => {
            state.Posts.push(action.payload)
        },
        edit : (state, action) => {
            const { content, index } = action.payload;
            state.Posts[index] = content;
        },
        deleted : (state, action) => {
            state.posts.splice(action.payload, 1);
        },
        setCurrentPostId: (state, action) => {
            state.currentPostId = action.payload;
        }
    }, 
    extraReducers : builder => {
        builder
            .addCase(addPost.fulfilled, (state, action) => {
                state.Posts.push(action.payload);
                console.log("게시판리듀서",action.payload);
                state.currentPostId = action.payload.postId;
            })
            .addCase(editPost.fulfilled, (state, action) => {
                console.log(action)
                const { userId, title, content, index } = action.payload;
                state.Posts[index] = userId && title && content;
            })
    }
})

export const { add, edit, deleted, setCurrentPostId } = BorderSlice.actions