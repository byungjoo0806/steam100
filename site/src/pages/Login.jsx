import React, { useEffect } from 'react'
import { LoginMain } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../features/LoginSlice';

export const Login = () => {
  const navi = useNavigate();
  let user_id = '';
  let user_pw = '';

  const user = useSelector(state => state.login); // redux에서 가져온 유저정보
  const dispatch = useDispatch(); 

  // 어드민 계정 생성
  const CreateAdmin = async() =>{
    await axios.get('http://localhost:8080/login',{ withCredentials: true });
  }

  useEffect(()=>{
    CreateAdmin();
  });

  let loginId = (e)=>{
    user_id = e.target.value;
  }

  let loginPw = (e)=>{
    user_pw = e.target.value;
  }

  const LoginFtn = ()=>{

    axios.post('http://localhost:8080/login',{
      user_id,
      user_pw
    },{
      withCredentials : true
    }).then((e)=>{
      console.log(e);
      alert(e.data.status);
      if(e.data.status === '로그인 성공'){
        dispatch(setUserInfo(e.data.user))
        navi('/');
      }else{
        navi('/login');
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  return (
  <>
    <LoginMain>
      <label>아이디</label>
      <input onChange={loginId}></input>
      <label>비밀번호</label>
      <input onChange={loginPw} type='password'></input>
      <div className='login_box_btns'>
        <button onClick={LoginFtn}>로그인</button>      
        <Link to={'/signup'}><button>회원 가입</button></Link>
      </div>
    </LoginMain>
  </>
  )
}