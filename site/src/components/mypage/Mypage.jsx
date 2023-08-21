import React from 'react';
import {MypageSubBox, MypageMainBox} from './Mypage.styled';

const Mypage = ({children}) => {
    return (
        <div style={{width : "100%", height : "100%", display : "flex", justifyContent : "space-evenly"}}>
            <MypageMainBox>
                My page
                <MypageSubBox>
                    {children}
                </MypageSubBox>
            </MypageMainBox>
        </div>
    )
}

export default Mypage