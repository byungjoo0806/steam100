import React from 'react';
import { SignupBox } from './Signup.styled';

const Signup = ({ children }) => {
  return (
    <div>
      <SignupBox>
        {children}
      </SignupBox>
    </div>
  )
}

export default Signup