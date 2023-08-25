import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 섹션 전체 컴포넌트 컨테이너
export const SectionContainer = styled.div`
    background-color: #faf3e6;
    width: 450px;
    height: 570px;
    text-align: center;
    border-radius: 10px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
    margin: 10px;
`
/////////////////////////////////////

// 섹션 머리 부분
export const SectionHeader = styled.div`
    width: 100%;
`
export const SectionHeaderH2 = styled.h2`
    margin: 0;
    color: #9e814c;
    font-weight: 900;
    font-size: 2em;
    text-shadow: 0 1px 0 #9e814c, 0 2px 0 #8f7446, 0 3px 0 #826940, 0 4px 0 #735d39, 0 5px 0 #665233, -1px -1px 1px #fffccc, 0 6px 1px rgba(0,0,0,.0980392), 0 0 5px rgba(0,0,0,.0980392), 0 1px 3px rgba(0,0,0,.298039), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.247059), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.14902);   
`
export const SectionHeaderP = styled.p`
    padding-bottom: 0.9em;
    font: calc(6px + 1vw)/.8 Codystar;
    margin-top: 10px;
    color: #b3b5bd;
    font-size: 0.8em;
    text-shadow: 0 0 0 #b3b5bd, 0 0 3px #989976, 1px 1px 0 #000;
    text-transform: uppercase;
    text-align: center;
`


////////////////////////////////////

// 섹션 메인 부분
export const SectionMain = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    padding: 10px; 
    background-color: #f8e5d1;
    border-radius: 8px; 
    overflow: auto; 
    margin: 10px auto;
`

export const SectionMainUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #faf3e6;
`

export const SectionMainLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 8px; 
    border-radius: 4px; 
    transition: background-color 0.3s ease; 
    margin: 4px 0;

    &:hover {
        background-color: #9e814c;
    }
`

export const SectionMainLiNull = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 8px; 
    border-radius: 4px; 
    transition: background-color 0.3s ease; 
    margin: 4px 0;
    opacity: 0.5;
`

export const SectionMainSpan = styled.span`
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-direction: row-reverse;
`

export const SectionMainImg = styled.img`
    min-width: 96px;
    height: 36px;
    margin-right: 12px; 
    display: block;
    margin-left: auto;
`

export const SectionMainText = styled.span`
    color: #4b4b4b;
    font-weight: bold; 
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    
`

export const Styledlink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

/////////////////////////////////////

// 섹션 바텀 부분
export const SectionFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`
export const FooterLink = styled.div`
    background-color: #9e814c;
    color: #faf3e6;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #8f7446;
        transform: scale(1.05);

    cursor: pointer;
    }
`