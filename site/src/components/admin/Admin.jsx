import React from 'react';
import { AdminBox } from './Admin.styled';

const Admin = ({children}) => {
  return (
    <div>
      <AdminBox>
        {children}
      </AdminBox>
    </div>
  )
}

export default Admin