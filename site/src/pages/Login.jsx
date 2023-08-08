import React from 'react'
import { LoginMain } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Login = ({isLogin, dispatch}) => {
  const navi = useNavigate();
  let user_id = '';
  let user_pw = '';

  // 어드민 계정 생성
  const CreateAdmin = async() =>{
    await axios.get('http://localhost:5000/login',{withCredentials : true});
  }

  let loginId = (e)=>{
    user_id = e.target.value;
  }

  let loginPw = (e)=>{
    user_pw = e.target.value;
  }

  const LoginFtn = async()=>{
    await axios.post('http://localhost:5000/login',{
      user_id,
      user_pw
    },{
      withCredentials : true
    }).then((e)=>{
      alert(e.data);
      if(e.data[0] == '로'){
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
      로그인을 하시겠습니까?
      {CreateAdmin}
      {isLogin ? "로그인이 완료됌" : "다시 로그인"}
      <label>ID</label>
      <input onChange={loginId}></input>
      <label>PW</label>
      <input onChange={loginPw}></input>
      <button onClick={LoginFtn}>로그인</button>
      
      <button><Link to={'/signup'}>회원 가입</Link></button>
      
    </LoginMain>
  </>
  )
}