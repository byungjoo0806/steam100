import styled from 'styled-components';

export const BorderBox = styled.div`
    margin: auto;
    text-align: center;
    width: 800px;
    height: 800px;
    border: 1px solid;
    background-color: whitesmoke;
    overflow: auto;

    & .border_container {
        /* position: relative; */
    }

    & h1 {
        font-size: 2.5em;
        
        animation: colorChange 3s infinite;

        @keyframes colorChange {
            0% {color: black}
            33% {color: blue}
            66% {color: red}
            100% {color: black}
        }
    }
    /* 게시판 헤더 부분 */
    & .border_herder {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
        flex-direction: row;
        justify-content: space-around;
        gap: 10px;
        border: 1px solid;
        font-weight: bold;
        text-align: center;
        overflow: auto;
    }

    & .border_li {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        border: 1px solid;
        text-align: center;
        overflow: auto;
    }

    & .list_container {
        cursor: pointer;
        
        & :hover {
            background-color: #9e814c;
        }
    }

`