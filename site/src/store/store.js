import { configureStore } from '@reduxjs/toolkit'
import { LoginSlice } from '../features/LoginSlice'
import { BorderSlice } from '../features/BorderSlice'
import { ReplySlice } from '../features/ReplySlice'
import { RereplySlice } from '../features/RereplySlice'

export const store = configureStore({
    reducer : {
        login : LoginSlice.reducer,
        border : BorderSlice.reducer,
        reply : ReplySlice.reducer,
        rereply : RereplySlice.reducer
    }
})