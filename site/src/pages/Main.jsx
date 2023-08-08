import React from 'react'
import { HeaderH1 } from '../components/header/Header.styled'
import { Link } from 'react-router-dom'

export const Main = () => {
  
  return (
    <div>
              <HeaderH1>게임추천사이트</HeaderH1>
              <Link to={"detail"}>
                <div>PUBG: BATTLEGROUNDS</div>
              </Link>
    </div>
  )
}