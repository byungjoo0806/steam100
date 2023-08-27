import styled from 'styled-components';

export const BorderBox = styled.div`
  margin: auto;
  text-align: center;
  width: 1000px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #ccc;

  & .border_container {
    /* Custom styling if needed */
  }

  & h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
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
    background-color: #eee;
    padding: 15px;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  & .border_li {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 0px 1px 3px #ccc;
  }

  & .list_container {
    cursor: pointer;

    & :hover {
      background-color: #9e814c;
      color: white;
    }
  }
  
  & button {
    background-color: #007bff;
    color: white;
    padding: 15px 20px;
    margin: 15px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
  }
`;
