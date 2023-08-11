import { createSlice } from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {
        isLogin : false,
        nickname : '',
        age : 15,
        gender : '',
        access : 0
    },
    reducers : {
        isLoginTrue : (state) => {
            state.isLogin = true;
        },
        isLoginFalse : (state) => {
            state.isLogin = false;
        },
        setUserInfo : (state) => {
            state.access = 2;
        }
    }
})

export const {isLoginTrue, isLoginFalse, setUserInfo} = LoginSlice.actions