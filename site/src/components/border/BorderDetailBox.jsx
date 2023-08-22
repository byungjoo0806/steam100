import React from 'react'
import { InsertBox } from './BorderInsertBox.style'

const BorderDetailBox = ({ children }) => {
  return (
    <div>
        <InsertBox>
            {children}
        </InsertBox>
    </div>
  )
}

export default BorderDetailBox