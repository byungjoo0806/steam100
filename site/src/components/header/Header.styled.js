import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const HeaderWarp = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.bgColor};
`

export const HeaderBand = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`
export const HeaderIconWarp = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    margin: 10px;
`

export const HeaderIcon = styled.button`
    background-color: #b3b5bd;
    transition: all .15s cubic-bezier(.4,0,.2,1);
    border: 1px solid #e7e8ec;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    cursor: pointer;

    &:hover {
        background-color: #9e814c;
    }
`

export const HeaderIcon2 = styled.button`
    background-color: #b3b5bd;
    transition: all .15s cubic-bezier(.4,0,.2,1);
    border: 1px solid #e7e8ec;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: 5px;

    &:hover {
        background-color: #9e814c;
    }
`
export const HeaderAdminImg = styled.button`
    border: none;
    background-color: transparent; 
    cursor: pointer; 

    &:hover {
        background-color: royalblue;
    }
`

export const HeaderH1 = styled.h1`
    margin: 0;
    /* color: #9e814c; */
    color: ${({theme}) => theme.textColor};
    font-size: 8em;
    font-weight: 800;
    text-align: center;
    text-shadow: 0 1px 0 #9e814c, 0 2px 0 #8f7446, 0 3px 0 #826940, 0 4px 0 #735d39, 0 5px 0 #665233, -1px -1px 1px #fffccc, 0 6px 1px rgba(0,0,0,.0980392), 0 0 5px rgba(0,0,0,.0980392), 0 1px 3px rgba(0,0,0,.298039), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.247059), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.14902);

` 

export const HeaderSlogan = styled.p`
    padding-bottom: 0.9em;
    font: calc(6px + 1vw)/.8 Codystar;
    /* color: #b3b5bd; */
    color: ${({theme}) => theme.textColor};
    text-shadow: 0 0 0 #b3b5bd, 0 0 3px #989976, 1px 1px 0 #000;
    text-transform: uppercase;
    text-align: center;
`