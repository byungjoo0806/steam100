import React, { useEffect, useState, useRef } from 'react';
import { Mypage } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const navi = useNavigate();

    // input 초기화 설정
    // const [page,setPage] = useState('');
    const inputNick = useRef();
    const inputAge = useRef();
    const inputMale = useRef();
    const inputFemale = useRef();

    // 개인 정보 변수
    let nickname = '';
    let age = 15;
    let gender = 'male';

    // 페이지 기본값 설정
    const init = {
        nickname : '',
        age : 15,
        gender : '남성'
    }

    // 로그인 유저 정보
    const [userInfo,setUserInfo] = useState(init);

    let loginData = {};
    
    const LoginUserData = async()=>{
        await axios.get('http://localhost:5000/mypage',{
            withCredentials : true
        }).then((e)=>{
            if(e.data[0] !== '세'){
                let _gender = '남성';
                
                if(e.data.gender === 'female'){
                    _gender = '여성';
                }
                
                loginData.nickname = e.data.nickname;
                loginData.age = e.data.age;
                loginData.gender = _gender;

                setUserInfo(loginData);
            }else{
                alert(e.data);
                navi('/login');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    // 유저 데이터 소환
    useEffect(()=>{
        LoginUserData();
    },[])

    // 개인 정보 변경
    const ChangeNick = (e)=>{
        nickname = e.target.value;
    }

    const ChangeAge = (e)=>{
        age = e.target.value;
    }

    const ChangeGender = (e)=>{
        gender = e.target.value;
    }

    const ChangeInfo = async()=>{
        await axios.post('http://localhost:5000/mypage',{
            nickname,
            age,
            gender
        },{
            withCredentials : true
        }).then((e)=>{
            if(e.data[0] !== '세'){
                let _gender = '남성';
                
                if(e.data.gender === 'female'){
                    _gender = '여성';
                }
                
                loginData.nickname = e.data.nickname;
                loginData.age = e.data.age;
                loginData.gender = _gender;

                setUserInfo(loginData);
            }else{
                alert(e.data);
                navi('/login');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    // useEffect(()=>{
    //     inputNick.current.value = loginData.nickname;
    //     inputAge.current.value = loginData.age;
    //     if(loginData.gender === '남성'){
    //         inputMale.current.checked = true;
    //         inputFemale.current.checked = false;
    //     }else{
    //         inputMale.current.checked = false;
    //         inputFemale.current.checked = true;
    //     }
    // },[page])

    return (
        <>
            <Mypage>
                <h3>개인 정보</h3>
                <label>닉네임 : {userInfo.nickname}</label>
                <input onChange={ChangeNick} ref={inputNick}></input>
                <label>나이 : {userInfo.age}</label>
                <input type='number' onChange={ChangeAge} ref={inputAge}></input>
                <div onChange={ChangeGender}>
                    <p>gender : {userInfo.gender}</p>
                    <label>남성</label>
                    <input type='radio' name='gender' value={'male'} ref={inputMale}></input>
                    <label>여성</label>
                    <input type='radio' name='gender' value={'female'} ref={inputFemale}></input>
                </div>
                <button onClick={ChangeInfo}>개인 정보 변경</button>
                <h3>비밀 번호 변경</h3>
                <label>현재 비밀번호</label>
                <input type='password'></input>
                <label>변경 비밀번호</label>
                <input type='password'></input>
            </Mypage>
        </>
    )
}

export default MyPage