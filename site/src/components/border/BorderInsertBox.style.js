import styled from 'styled-components';

export const InsertBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    background-color: whitesmoke;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & label {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
    }

    & input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    & .insert_content {
        width: 100%;
        height: 500px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-align: center;
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

    .border_detail_btns{
        display: flex;
        gap: 20px;
    }

    //////////////////////////////댓글///////////////////////////////
    .reply_herder {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr;
        flex-direction: row;
        justify-content: space-around;
        gap: 10px;
        border: 1px solid;
        font-weight: bold;
        text-align: center;
        overflow: auto;
    }

    .reply_li {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        border: 1px solid;
        text-align: center;
        overflow: auto;
    }

    
    `;


