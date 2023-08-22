import { createSlice } from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name : 'Login',
    initialState : {
        isLogin : false,
        nickname : '',
        age : 15,
        gender : 'male',
        access : 0,
        id : 0
    },
    reducers : {
        isLoginFalse : (state) => {
            state.isLogin = false
            state.nickname = '';
            state.age = 15;
            state.gender = 'male';
            state.access = 0;
            state.id = 0;
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