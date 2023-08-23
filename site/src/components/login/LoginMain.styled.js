import styled from 'styled-components';

export const LoginMainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 430px;
    border-radius: 10px;
    background-color: #faf3e6;
    font-size: 50px;
    font-weight: bold;
    color: #9e814c;
`

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 370px;
    height: 300px;
    border-radius: 8px;
    background-color: #f8e5d1;
    font-size: 16px;
    font-weight: 500;
    color: black;

    & input {
        width: 70%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
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

    .login_box_btns{
        width: 70%;
        display: flex;
        gap: 20px;
    }
`