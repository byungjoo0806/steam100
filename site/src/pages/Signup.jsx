import React from 'react'
import { Signup } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignUp = () => {
    const navi = useNavigate();
    let user_id = '';
    let user_pw = '';
    let nickname = '';
    let age = 0;
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
        await axios.post('http://localhost:5000/signUp',{
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
                navi('/signup');
            }else{
                navi('/');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <Signup>
                <label htmlFor="">ID</label>
                <input onChange={CreateId}></input>
                <label htmlFor="">PW</label>
                <input onChange={CreatePw}></input>
                <label htmlFor="">Nickname</label>
                <input onChange={CreateNick}></input>
                <label htmlFor="">Age</label>
                <input type='number' min={0} step={1} onChange={CreateAge}></input>
                <div onChange={CreateGender}>Gender
                    <label htmlFor="male">남성</label>
                    <input type='radio' id='male' name='gender' value={'male'} defaultChecked></input>
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