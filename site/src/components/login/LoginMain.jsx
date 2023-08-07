import React from 'react'
import { LoginBox } from './LoginMain.styled'

const LoginMain = ({children}) => {
  return (
    <div>
      <LoginBox>
        {children}
      </LoginBox>
    </div>
  )
}

export default LoginMain