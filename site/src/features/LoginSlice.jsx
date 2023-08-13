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
        },
        setUserInfo : (state, action) => {
            const { nickname, age, gender, access } = action.payload;
            state.nickname = nickname;
            state.age = age;
            state.gender = gender;
            state.access = access;
            state.isLogin = true;
        }

    }
})

export const {isLoginTrue, isLoginFalse, setUserInfo} = LoginSlice.actions