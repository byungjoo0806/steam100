import styled from 'styled-components';

export const AdminBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    background-color: whitesmoke;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    & .usersContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & h1 {
        margin-bottom: 20px;
        font-size: 24px;
        color: #333;
    }

    & .user-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #e0e0e0;

        &:last-child {
            border-bottom: none;
        }
    }

    & button {
        margin: 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }

        &:last-child {
            background-color: #dc3545;

            &:hover {
                background-color: #c82333;
            }
        }
    }

    & .nickname {
        font-size: 1.5em;
        color: #9e814c;
        font-weight: 800;
        margin-right: 50px;
        overflow: auto;
    }
`;
