import styled from 'styled-components';

export const SignupMainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 630px;
    border-radius: 10px;
    background-color: #faf3e6;
    font-size: 50px;
    font-weight: bold;
    color: #9e814c;
`

export const SignupBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    width: 380px;
    height: 500px;
    border-radius: 8px;
    background-color: #f8e5d1;
    font-size: 16px;
    font-weight: 500;
    color: black;
    position: relative;
    padding-top: 20px;

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

    .gender_box{
        width: 170px;
        height: 80px;  
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        & p {
            font-size: 20px;
        }
    }

    .select_area{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`