import styled from 'styled-components';

export const Gameinfopage = styled.div`
    display : flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Mainbox = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content: center;
    flex-wrap : wrap;
    margin-top : 10px;
`

export const Gameintrobox = styled.div`
    width : 1000px;
    height : 500px;
    display : flex;
    flex-wrap : wrap;
    position : relative;
`

export const Gametitlebox = styled.div`
    width : 500px;
    height : 10%;
    display : flex;
    justify-content : flex-start;
    align-items : end ;
`

export const Gametitle = styled.p`
    margin-left : 5px;
    font-size : 25px;
`

export const Gameintro = styled.div`
    width : 310px;
    height : 90%;
    position : absolute;
    right : 0;
    bottom : 0;
    box-sizing : border-box;
`

export const Introimgbox = styled.div`
    width : 100%;
    height : 35%;
`

export const Introtextbox = styled.div`
    width : 100%;
    height : 35%;
    overflow : hidden;
    font-size : 15px;
    text-align : start;
    display: flex;
    align-items: center;
`

export const Introtext = styled.p`
    margin-left : 5px;
`

export const Companybox = styled.div`
    width : 100%;
    height : 30%;
    display : flex;
    flex-wrap : wrap;
    align-content: center;
    font-size: 15px;
    border-top: 1px dashed;
`

export const Releasedatebox = styled.div`
    width : 100%;
    height : 20%;
`

export const Releasedate = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    margin-left : 5px;
`

export const Developersbox = styled.div`
    width : 100%;
    height : 20%;
`

export const Developers = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    margin-left : 5px;
`

export const Publisherbox = styled.div`
    width : 100%;
    height : 20%;
`

export const Publisher = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    margin-left : 5px;
`



// --------------------------------------------------------
export const Gamedetailbox = styled.div`
    width : 1000px;
    height : auto;
`

export const Aboutthegame = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-wrap : wrap;
    text-align : left;
`

export const Detailtitle = styled.div`
    position: relative;
    padding: 10px;
    z-index: 1;
    margin-top: 20px;
    margin-bottom: 10px;
    color: white;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        height: -5px;
        background-image: linear-gradient(to right, black, white);
    }
`

export const Aboutthegametext = styled.div`
    margin-left : 5px;
`


// ---------------------------------------------
export const Maturecontent = styled.div`
    width : 100%;
    height : auto;
    text-align : left;
`
export const Maturecontenttext = styled.div`
    margin-left : 5px;
    font-style: italic;
`


// ----------------------------------------------
export const Specrequirements = styled.div`
    width : 100%;
    height : auto;
    text-align : left;
`