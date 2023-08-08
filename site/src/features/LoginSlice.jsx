import { createSlice } from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {isLogin : false},
    reducers : {
        isLoginTrue : (state) => {
            state.isLogin = true;
        },
        isLoginFalse : (state) => {
            state.isLogin = false
        }
    }
})

export const {isLoginTrue, isLoginFalse} = LoginSlice.actions