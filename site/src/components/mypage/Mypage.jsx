import React from 'react';
import {MypageBox} from './Mypage.styled';

const Mypage = ({children}) => {
    return (
        <MypageBox>
            {children}
        </MypageBox>
    )
}

export default Mypage