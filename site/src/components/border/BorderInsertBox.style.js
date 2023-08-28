import styled from 'styled-components';

export const InsertBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;

    & label {
        font-size: 1.2em;
        margin-bottom: 10px;
        color: #333;
    }

    & input {
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    & .insert_content {
        height: 400px;
        resize: vertical;
    }

    & button {
        padding: 12px 24px;
        margin: 8px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }

    .border_detail_btns {
        display: flex;
        gap: 16px;
    }

    .reply_insert_container, .rereply_input_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        margin-bottom: 20px;

        & label {
            flex-basis: 10%;
        }

        & input {
            flex-basis: 70%;
            margin-top: 20px;
        }

        & button {
            flex-basis: 15%;
        }
    }

    .reply_container, .rereply_container {
        width: 100%;
    }

    .reply_header, .rereply_li {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr;
        gap: 16px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 12px;

        & p, & input, & button {
            text-align: center;
        }
    }

    .replyli_container, .rereply_li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 12px;
    }

    .rereply_container {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    .rereply_li {
        width: 90%;
    }

    .rereply_input_box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .rereply_input_container {
        width: 90%;
    }

    .replyTextBox {
        width: 30%;
        display: flex;
    }
`;
