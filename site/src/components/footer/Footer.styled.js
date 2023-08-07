import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 90%;
    height: 400px;
    margin: 0 auto;
`

export const FooterWrap = styled.div`
    position: relative;
    left: 0;
    
`
export const FooterTop = styled.div`
    display: flex;
    width: 100%;
    margin-top: 40px;
`
export const FooterTopLeft = styled.ul`
    width: 80%;
    list-style-type: none;
    display: flex;
    gap: 25px;
    font-weight: 600;
`
export const FooterTopRight = styled.ul`
    width: 20%;
    list-style-type: none;
    display: flex;
    gap: 20px;
`

export const FooterLangBtn = styled.button`
    border: none;
    background: none;
`
export const FooterBottom = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    position: relative;
`
export const FooterLogo = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    margin: 15px;
    margin-left: 30px;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`
export const FooterP = styled.p`
    position: absolute;
    top: 90px;
    left: 30px;
    font-weight: 200;
`