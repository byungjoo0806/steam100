import React from 'react'
import { LoginBox, LoginMainBox } from './LoginMain.styled'

const LoginMain = ({children}) => {
  return (
    <div>
      <LoginMainBox>
        <LoginBox>
          {children}
        </LoginBox>
      </LoginMainBox>
    </div>
  )
}

export default LoginMain