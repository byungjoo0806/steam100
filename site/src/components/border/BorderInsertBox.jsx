import React from 'react'
import { InsertBox } from './BorderInsertBox.style'

const BorderInsertBox = ({ children }) => {
  return (
    <div>
        <InsertBox>
            {children} 
        </InsertBox>
    </div>
  )
}

export default BorderInsertBox