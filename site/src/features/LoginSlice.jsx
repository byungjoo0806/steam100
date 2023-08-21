import { createSlice } from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {isLogin : false},
    reducers : {
        isLoginTrue : (state, action) => {
            const { nickname } = action.payload;
            state.isLogin = true;
            state.nickname = nickname;
        },
        
        isLoginFalse : (state) => {
            state.isLogin = false
            state.nickname = '';
        },
        setUserInfo : (state, action) => {
            const { nickname, age, gender, access, id } = action.payload;
            state.nickname = nickname;
            state.age = age;
            state.gender = gender;
            state.access = access;
            state.isLogin = true;
            state.id = id;
        }

    }
})

export const {isLoginTrue, isLoginFalse, setUserInfo} = LoginSlice.actions