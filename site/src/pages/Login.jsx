import React, { useEffect } from 'react'
import { LoginMain } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
  const navi = useNavigate();
  let user_id = '';
  let user_pw = '';

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
      // dispath(action(e))
      // 컴포넌트 어디서든 사용할수 있음
      // useselector

      // 1. 리덕스로 유저 정보 저장 e
      // 2. useselector로 필요한 곳에 가져와서 사용
      // 3. user.access 2 
      
      console.log(e);
      alert(e.data.status);
      if(e.data.status === '로그인 성공'){
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
      <button onClick={LoginFtn}>로그인</button>      
      <button><Link to={'/signup'}>회원 가입</Link></button>
      
    </LoginMain>
  </>
  )
}