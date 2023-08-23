import styled from 'styled-components';

export const MypageMainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 800px;
    height: 560px;
    border-radius: 10px;
    background-color: #faf3e6;
    font-size: 50px;
    font-weight: bold;
    color: #9e814c;
`

export const MypageSubBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 750px;
    height: 400px;
    border-radius: 8px;
    background-color: #f8e5d1;
    font-size: 16px;
    font-weight: 500;
    color: black;
    
    & input {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    & h3 {
        font-size: 24px;
        font-weight: 700;
    }

    & button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }    

    .userInfo_box{
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        position: relative;

        .genderbox {
            display: flex;
            flex-direction: column;

            & p {
                font-size: 20px;
            }           
        }
    }

    .select_area{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .changePw_box{
        width: 300px;
        height: 350px;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .change_info_btn, .change_pw_btn{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%,0);
    }
`