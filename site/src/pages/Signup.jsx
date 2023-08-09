import React, { useEffect, useRef, useState } from 'react'
import { Signup } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignUp = () => {
    const navi = useNavigate();
    
    // 리렌더링을 위한 변수 설정
    const [page,setPage] = useState('');
    const inputId = useRef();
    const inputPw = useRef();
    const inputNick = useRef();
    const inputAge = useRef();
    const inputGender = useRef();

    // 회원 가입용 변수
    let user_id = '';
    let user_pw = '';
    let nickname = '';
    let age = 15;
    let gender = 'male';

    const CreateId = (e)=>{
        user_id = e.target.value;
    }

    const CreatePw = (e)=>{
        user_pw = e.target.value;
    }

    const CreateNick = (e)=>{
        nickname = e.target.value;
    }

    const CreateAge = (e)=>{
        age = e.target.value;
    }

    const CreateGender = (e)=>{
        gender = e.target.value;
    }

    const CreateUserData = async()=>{
        await axios.post('http://localhost:8080/signUp',{
            user_id,
            user_pw,
            nickname,
            age,
            gender
        },{
            withCredentials : true
        }).then((e)=>{
            alert(e.data);
            if(e.data[0] === '아'){
                if(page === ''){
                    setPage('reset');
                }else{
                    setPage('');
                }
            }else{
                navi('/');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(()=>{
        inputId.current.value = "";
        inputPw.current.value = '';
        inputNick.current.value = '';
        inputAge.current.value = 15;
        inputGender.current.checked = true;
    },[page])

    return (
        <>
            <Signup>
                <label htmlFor="">아이디</label>
                <input onChange={CreateId} ref={inputId}></input>
                <label htmlFor="">비밀번호</label>
                <input onChange={CreatePw} type='password' ref={inputPw}></input>
                <label htmlFor="">닉네임</label>
                <input onChange={CreateNick} ref={inputNick}></input>
                <label htmlFor="">나이</label>
                <input type='number' min={15} step={1} onChange={CreateAge} ref={inputAge}></input>
                <div onChange={CreateGender}>
                    <p>성별</p>
                    <label htmlFor="male">남성</label>
                    <input type='radio' id='male' name='gender' value={'male'} defaultChecked ref={inputGender}></input>
                    <label htmlFor="female">여성</label>
                    <input type='radio' id='female' name='gender' value={'female'}></input>
                </div>
                <button onClick={CreateUserData}>회원 가입</button>
                <button><Link to={'/'}>메인 페이지로</Link></button>
            </Signup>
        </>
    )
}

export default SignUp