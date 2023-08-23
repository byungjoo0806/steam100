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
          <Link to={'/border'}>
            <MenuLi>Post</MenuLi>
          </Link>
        </MenuUl>
      </MenuBar>
    </div>
  )
}

export default Menu