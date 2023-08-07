import React from 'react'
import { LoginMain } from '../components'

export const Login = ({isLogin, isLoginFalse, isLoginTrue, dispatch}) => {
  return (
  <>
    <LoginMain>
      로그인을 하시겠습니까?
      {isLogin ? "로그인이 완료됌" : "다시 로그인"}
      <button onClick={()=>dispatch(isLoginTrue())}>로그인</button>
      <button onClick={()=>dispatch(isLoginFalse())}>로그아웃</button>
    </LoginMain>
  </>
  )
}