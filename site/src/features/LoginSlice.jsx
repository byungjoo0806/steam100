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

// 게시글 테이블에 있는 유저 아이디로 유저 조회 - 닉네임 

// 백딴에 조회 할 수 있게 만들어서 프론트단에 send로 보내고

// 프론트에서 유저 닉네임 가져와서 사용 / get으로 가져오고 리턴해서 변수 넣으면될듯?