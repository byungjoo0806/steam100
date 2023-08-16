import { createSlice } from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {
        isLogin : false,
        nickname : '',
        age : 0,
        gender : '',
        access : 0
    },
    reducers : {
        isLoginTrue : (state) => {
            state.isLogin = true;
        },
        isLoginFalse : (state) => {            
            state.nickname = '';
            state.age = 0;
            state.gender = '';
            state.access = 0;
            state.isLogin = false;
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

export const { isLoginTrue, isLoginFalse, setUserInfo } = LoginSlice.actions