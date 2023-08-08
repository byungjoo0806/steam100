import { createSlice } from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {
        isLogin : false,
        nickname : '',
        age : 15,
        gender : 'male'
    },
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