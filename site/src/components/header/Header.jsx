import React, { useEffect } from 'react'
import { HeaderWarp, HeaderBand, HeaderIconWarp, HeaderIcon, HeaderH1, HeaderSlogan, HeaderLoginUser} from './Header.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '../../context/themeProvider'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isLoginFalse, isLoginTrue } from '../../features/LoginSlice';

const Header = ( { Link } ) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.login);
  const [ThemeMode, toggleTheme] = useTheme();
  // console.log(user)

  const navi = useNavigate();
  
  useEffect(() => {
    // 페이지 로딩 시 로그인 상태 확인
    axios.get('http://localhost:8080/mypage', { withCredentials: true })
        .then((response) => {
            if (response.data[0] !== '세') {
              const nickname = response.data.nickname;
                dispatch(isLoginTrue({nickname}));
            } else {
                dispatch(isLoginFalse());
            }
        })
        .catch((error) => {
            console.log(error);
        });
}, [dispatch]);

  
  const LoginCheck = async()=>{
    await axios.get('http://localhost:8080/mypage',{
      withCredentials : true
    }).then((e)=>{
      if(e.data[0] !== '세'){
        navi('/mypage');
        dispatch(isLoginTrue());
      }else{
        navi('/login');
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  const Logout = async() =>{
    await axios.get('http://localhost:8080/login/logout',{
      withCredentials : true
    }).then((e)=>{
      if(e.data[0] !== '세'){
        alert(e.data);
        navi('/');
        dispatch(isLoginFalse());
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <div className='Header'>
      <HeaderWarp>
          <HeaderIconWarp>
            <HeaderLoginUser>
              {user.nickname ? `${user.nickname} 님 접속중` : '로그인 되지 않았습니다.'}
            </HeaderLoginUser>
            {/* 어드민만 어드민 버튼 보이게 적용 */}
            {user.access === 2 &&
              <Link to={'admin'}>
                <HeaderIcon>
                <svg viewBox="0 0 50 50" width="24" height="24" className="header_dark">
                <path fill="none" d="M2.91,24.2c2.09,0.84,4.36,1.32,6.75,1.32c9.95,0,18.01-8.06,18.01-18.01c0-2.25-0.43-4.4-1.19-6.38H2.91V24.2   z"/>
                <path fill="none" d="M46.07,48.12H7.21c0.06-8.88,6.07-16.33,14.24-18.59l5.19,8.99l5.19-8.99C40,31.79,46.01,39.25,46.07,48.12z"/>
                <path fill="none" d="M39.33,16.2v-2.77l-3.97-0.75c-0.21-0.9-0.57-1.75-1.04-2.52l2.28-3.34l-1.96-1.96L31.3,7.14    c-0.77-0.47-1.62-0.83-2.53-1.04l-0.75-3.97h-2.77L24.51,6.1c-0.9,0.21-1.76,0.57-2.53,1.04l-3.34-2.28l-1.96,1.96l2.28,3.34    c-0.47,0.77-0.83,1.62-1.04,2.52l-3.97,0.75v2.77l3.97,0.75c0.21,0.9,0.57,1.75,1.04,2.52l-2.28,3.34l1.96,1.96l3.34-2.28    c0.77,0.47,1.62,0.83,2.52,1.05l0.75,3.97h2.77l0.75-3.97c0.9-0.21,1.75-0.57,2.52-1.05l3.34,2.28l1.96-1.96l-2.28-3.34    c0.47-0.77,0.83-1.62,1.04-2.52L39.33,16.2z M26.64,18.97c-2.3,0-4.16-1.86-4.16-4.16c0-2.3,1.86-4.16,4.16-4.16    s4.16,1.86,4.16,4.16C30.8,17.11,28.94,18.97,26.64,18.97z"/>
                <g fill="#000">
                    <path d="M32.3,28.81c-0.32-0.09-0.68,0.05-0.85,0.35l-4.54,7.86l-4.54-7.86c-0.17-0.3-0.52-0.44-0.85-0.35     C12.88,31.2,6.8,39.14,6.73,48.12c0,0.2,0.08,0.39,0.22,0.53c0.14,0.14,0.33,0.22,0.53,0.22h38.85c0.2,0,0.39-0.08,0.53-0.22     c0.14-0.14,0.22-0.33,0.22-0.53C47.02,39.14,40.94,31.2,32.3,28.81z M39.52,47.38v-3.76c0-0.41-0.34-0.75-0.75-0.75     s-0.75,0.34-0.75,0.75v3.76H15.8v-3.76c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75v3.76H8.25     c0.37-7.81,5.65-14.64,13.12-16.96l4.89,8.48c0.13,0.23,0.38,0.38,0.65,0.38s0.52-0.14,0.65-0.38l4.89-8.48     c7.46,2.31,12.74,9.15,13.11,16.95H39.52z"/>
                    <path d="M14.08,16.94l3.5,0.66c0.19,0.64,0.44,1.25,0.76,1.84l-2.01,2.95c-0.2,0.3-0.17,0.7,0.09,0.95l1.96,1.96     c0.26,0.25,0.66,0.29,0.95,0.09l2.95-2.01c0.59,0.32,1.2,0.58,1.84,0.76l0.66,3.51c0.07,0.35,0.38,0.61,0.74,0.61h2.77     c0.36,0,0.67-0.26,0.74-0.61l0.66-3.51c0.64-0.19,1.25-0.44,1.84-0.76l2.95,2.01c0.3,0.2,0.7,0.17,0.95-0.09l1.96-1.96     c0.25-0.25,0.29-0.65,0.09-0.95l-2.01-2.95c0.32-0.59,0.58-1.2,0.76-1.84l3.5-0.66c0.35-0.07,0.61-0.38,0.61-0.74v-2.77     c0-0.36-0.26-0.67-0.61-0.74l-3.5-0.66c-0.19-0.64-0.44-1.25-0.76-1.84l2.01-2.94c0.2-0.3,0.17-0.7-0.09-0.95l-1.96-1.96     c-0.26-0.26-0.66-0.29-0.96-0.09l-2.94,2.02c-0.58-0.32-1.2-0.57-1.84-0.76l-0.66-3.51c-0.07-0.35-0.38-0.61-0.74-0.61h-2.77     c-0.36,0-0.67,0.26-0.74,0.61l-0.66,3.51c-0.64,0.19-1.26,0.44-1.84,0.76l-2.94-2.02c-0.3-0.2-0.7-0.17-0.96,0.09l-1.96,1.96     c-0.25,0.25-0.29,0.65-0.09,0.95l2.01,2.94c-0.32,0.59-0.58,1.2-0.76,1.84l-3.5,0.66c-0.35,0.07-0.61,0.38-0.61,0.74v2.77     C13.47,16.56,13.73,16.87,14.08,16.94z M14.97,14.05l3.35-0.63c0.29-0.05,0.52-0.28,0.59-0.56c0.19-0.81,0.51-1.58,0.95-2.3     c0.16-0.25,0.15-0.57-0.02-0.82l-1.92-2.82l1.08-1.08l2.82,1.93c0.25,0.17,0.56,0.17,0.82,0.02c0.71-0.44,1.49-0.76,2.31-0.95     c0.29-0.07,0.51-0.3,0.56-0.59l0.63-3.36h1.53l0.63,3.36c0.05,0.29,0.28,0.52,0.56,0.59c0.82,0.2,1.6,0.52,2.31,0.95     c0.25,0.16,0.57,0.15,0.82-0.02l2.82-1.93l1.08,1.08l-1.92,2.82c-0.17,0.24-0.17,0.56-0.02,0.82c0.44,0.72,0.76,1.49,0.95,2.3     c0.07,0.29,0.3,0.51,0.59,0.56l3.35,0.63v1.53l-3.35,0.63c-0.29,0.05-0.52,0.28-0.59,0.56c-0.19,0.81-0.51,1.59-0.95,2.3     c-0.16,0.25-0.15,0.57,0.02,0.82l1.93,2.83l-1.08,1.08l-2.83-1.93c-0.24-0.17-0.56-0.17-0.81-0.02c-0.72,0.44-1.49,0.76-2.3,0.95     c-0.29,0.07-0.51,0.3-0.56,0.59l-0.63,3.36h-1.53l-0.63-3.36c-0.05-0.29-0.28-0.52-0.56-0.59c-0.81-0.19-1.58-0.51-2.3-0.95     c-0.25-0.15-0.57-0.15-0.81,0.02l-2.83,1.93l-1.08-1.08l1.93-2.83c0.17-0.24,0.17-0.56,0.02-0.82c-0.44-0.71-0.76-1.49-0.95-2.3     c-0.07-0.29-0.3-0.51-0.59-0.56l-3.35-0.63V14.05z"/>
                    <path d="M26.91,19.72c2.71,0,4.91-2.2,4.91-4.91s-2.2-4.91-4.91-4.91S22,12.11,22,14.82S24.21,19.72,26.91,19.72z      M26.91,11.41c1.88,0,3.41,1.53,3.41,3.41s-1.53,3.41-3.41,3.41s-3.41-1.53-3.41-3.41S25.03,11.41,26.91,11.41z"/>
                </g>
                </svg>
                </HeaderIcon>
              </Link>
            }
            
            {/* 다크 모드 버튼 적용 */}
            <HeaderIcon onClick={toggleTheme}>
              <svg viewBox="0 0 24 24" width="24" height="24" className="header_dark"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path></svg>
            </HeaderIcon>

            {/* 로그인 */}
            <Link to={'login'}>
              <HeaderIcon onClick={LoginCheck}>
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path></svg>
              </HeaderIcon>
            </Link>

            {/* 로그아웃 */}
            <HeaderIcon onClick={Logout}>
            <svg viewBox="0 0 32 32" width="24" height="24" className="header_dark">
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.92 16L28.92 16 M23.93 25v3h-16V4h16V7h2V3a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V25 M28.92 16l-4 4 M28.92 16l-4-4 M24.92 8.09V6.09 M24.92 26v-2"></path>
            </svg>
            </HeaderIcon>
          </HeaderIconWarp>
        <HeaderBand>
            <Link to={'/'} className='Link'>
              <HeaderH1>Steam 100</HeaderH1>
            </Link>    
        </HeaderBand>
        <HeaderSlogan>
        HELPING YOU FIND GOOD GAMES ON STEAM SINCE 2017
        </HeaderSlogan>
      </HeaderWarp>
    </div>
  )
}

export default Header