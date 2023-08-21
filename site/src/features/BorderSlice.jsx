import { createSlice } from "@reduxjs/toolkit";

export const BorderSlice = createSlice({
    name : "Border",
    initialState : {
        posts : []
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
    }
})

export const { add, edit, deleted} = BorderSlice.actions