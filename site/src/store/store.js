import { configureStore } from '@reduxjs/toolkit'
import { LoginSlice } from '../features/LoginSlice'
import { BorderSlice } from '../features/BorderSlice'

export const store = configureStore({
    reducer : {
        login : LoginSlice.reducer,
        border : BorderSlice.reducer,
    }
})