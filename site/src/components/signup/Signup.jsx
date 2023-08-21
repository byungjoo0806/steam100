import React from 'react';
import { SignupBox, SignupMainBox } from './Signup.styled';

const Signup = ({ children }) => {
  return (
    <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly"}}>
      <SignupMainBox>
        Sign Up
        <SignupBox>
          {children}
        </SignupBox>
      </SignupMainBox>
    </div>
  )
}

export default Signup;