import React from 'react'
import { HeaderWarp, HeaderLogo, HeaderBand, HeaderInput, Mypage, HeaderIconWarp, HeaderIcon, HeaderIcon2, HeaderH1 } from './Header.styled'

const Header = ( {Link} ) => {
  return (
    <div className='Header'>
      <HeaderWarp>
        <HeaderBand>
            <Link to={'/'}>
              <HeaderLogo>
                @
              </HeaderLogo> 
            </Link>    
              <h1>게임추천사이트</h1>
              
              <h5>beta</h5>
              <HeaderInput placeholder='찾기를 원하는 게임 이름을 입력하시오' title='?' />
            {/* <Link to={'/mypage'}> */}
              <Mypage>마이페이지</Mypage>
            {/* </Link>  */}
              <HeaderIconWarp>
                <HeaderIcon>
                <svg viewBox="0 0 24 24" width="24" height="24" className="header_dark"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path></svg>
                </HeaderIcon>
            <Link to={'login'}>
                <HeaderIcon2>
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path></svg>
                </HeaderIcon2>
            </Link> 
              </HeaderIconWarp>
        </HeaderBand>
      </HeaderWarp>
    </div>
  )
}

export default Header