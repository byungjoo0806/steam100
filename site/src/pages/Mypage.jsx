import React, { useEffect, useState } from 'react';
import { Mypage } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {  

    return (
        <>
            <Mypage>
                <h3>개인 정보</h3>
                <label>닉네임 : </label>
                <input></input>
                <label>나이 : </label>
                <input type='number'></input>
                <div>
                    <p>gender : </p>
                    <label>남성</label>
                    <input type='radio' name='gender' value={'male'}></input>
                    <label>여성</label>
                    <input type='radio' name='gender' value={'female'}></input>
                </div>
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