import React from 'react'
import { BorderBox } from './BorderMain.styled'

const BorderMain = ({children}) => {
  return (
    <div>
        <BorderBox>
          {children}
        </BorderBox>
    </div>
  )
}

export default BorderMain