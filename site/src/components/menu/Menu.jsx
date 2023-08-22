import React from 'react'
import { MenuBar, MenuUl, MenuLi } from './Menu.styled'

const Menu = ({ Link }) => {
  return (
    <div className='Menu'>
      <MenuBar>
        <MenuUl>
            {/* 해당 링크로 연결 해야 됌 */}
          <Link to={'/'}> 
            <MenuLi>Top 100</MenuLi>
          </Link>
          <Link to={'/top10'}>
            <MenuLi>Top 10</MenuLi>
          </Link>  
          <Link to={'/border'}>
            <MenuLi>자유 게시판</MenuLi>
          </Link>
        </MenuUl>
      </MenuBar>
    </div>
  )
}

export default Menu