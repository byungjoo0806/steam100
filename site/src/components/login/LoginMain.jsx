import React from 'react'
import { LoginBox, LoginMainBox } from './LoginMain.styled'

const LoginMain = ({children}) => {
  return (
    <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly"}}>
      <LoginMainBox> Login
        <LoginBox>
          {children}
        </LoginBox>
      </LoginMainBox>
    </div>
  )
}

export default LoginMain