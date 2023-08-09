import React, { useState } from 'react'
import { HeaderH1 } from '../components/header/Header.styled'
import { Link, useLocation } from 'react-router-dom'

export const Main = () => {
  const location = useLocation();
  console.log(location);

  const game = "PUBG: BATTLEGROUNDS";

  return (
    <div>
              <HeaderH1>게임추천사이트</HeaderH1>
              <Link to={`/detail/${game}`} state={{gameName : game}}>
                {game}
              </Link>
    </div>
  )
}