import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import striptags from "striptags";
import DOMPurify from 'dompurify';

import Mediaswiper from "../swiper/Mediaswiper";
import { loadingGIF } from '../../img';
import { Aboutthegame, Aboutthegametext, Companybox, Detailtitle, Developers, Developersbox, Gamedetailbox, Gameinfopage, Gameintro, Gameintrobox, Gametitle, Gametitlebox, Introimgbox, Introtext, Introtextbox, Mainbox, Maturecontent, Maturecontenttext, Publisher, Publisherbox, Releasedate, Releasedatebox, Specrequirements } from './Gameinfo.styled';

const Gameinfo = () => {
    const location = useLocation();
    console.log(location);
    const game = location.state.gameName;
    console.log(game);

    const backend = process.env.REACT_APP_BACKEND_SERVER;

    const [gameInfo, setGameInfo] = useState(null);

    useEffect(()=>{
        const fetchAppList = async ()=>{
            try {
                // --------------------- 백에서 api 가져오기 -----------------------
                const {data} = await axios.get(`${backend}/api/detailApp`,{
                    withCredentials : true,
                    params : {
                        game : game,
                    }
                });

                const strippedData = {
                    ...data,
                    description : striptags(data.detailed_description)
                };
                
                // console.log(data);
                setGameInfo(strippedData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAppList();
    },[game]);

    console.log(gameInfo);

    // 게임 출시 날짜
    const gameReleaseDate = gameInfo?.release_date.date;

    // 게임 개발 회사
    const gameDevelopers = gameInfo?.developers.toString().replace(",",", ");

    // 게임 배급 회사
    const gamePublisher = gameInfo?.publishers.toString().replace(",",", ");

    // 게임 내용
    const aboutTheGame = gameInfo?.about_the_game;


    // html 형식으로 들어온 값들을 그 형식 그대로 보여주기 위한 함수/컴포넌트
    const HtmlContent = ({htmlcontent})=>{
        const sanitizedHtml = DOMPurify.sanitize(htmlcontent);

        return (
            <div dangerouslySetInnerHTML={{__html : sanitizedHtml}} style={{marginLeft : "5px"}}></div>
        )
    };

    // -------------------------- pc 최소 권장 사양 ------------------------------

    // 운영체제에 따른 최소 사양
    const windowsMinRequirements = gameInfo?.pc_requirements?.minimum;
    const macMinRequirements = gameInfo?.mac_requirements?.minimum;
    const linuxMinRequirements = gameInfo?.linux_requirements?.minimum;

    // 운영체제에 따른 권장 사양
    const windowsRecRequirements = gameInfo?.pc_requirements?.recommended;
    const macRecRequirements = gameInfo?.mac_requirements?.recommended;
    const linuxRecRequirements = gameInfo?.linux_requirements?.recommended;


    // 최소 사양 보여주는 부분을 운영체제에 따른 탭으로 구분하기
    const Tabmenu = () => {
        const [activeTab, setActiveTab] = useState(1);
    
        const handleTabClick = (tabIndex)=>{
            setActiveTab(tabIndex);
        };
    
        let minimum;
        let recommended;

        switch (activeTab) {
            case 1:
                minimum = windowsMinRequirements ? <HtmlContent htmlcontent={windowsMinRequirements} /> : null;
                recommended = windowsRecRequirements ? <HtmlContent htmlcontent={windowsRecRequirements} /> : null;
                break;
            case 2:
                minimum = macMinRequirements ? <HtmlContent htmlcontent={macMinRequirements} /> : null;
                recommended = macRecRequirements ? <HtmlContent htmlcontent={macRecRequirements} /> : null;
                break;
            case 3:
                minimum = linuxMinRequirements ? <HtmlContent htmlcontent={linuxMinRequirements} /> : null;
                recommended = linuxRecRequirements ? <HtmlContent htmlcontent={linuxRecRequirements} /> : null;
                break;
            default:
                minimum = <div>No content available</div>
        }
    
        return (
            <div>
                <div>
                    {windowsMinRequirements && <button onClick={()=>handleTabClick(1)}>Windows</button>}
                    {macMinRequirements && <button onClick={()=>handleTabClick(2)}>Mac</button>}
                    {linuxMinRequirements && <button onClick={()=>handleTabClick(3)}>Linux</button>}
                </div>
                <div style={{display : "flex", fontSize : "15px"}}>
                    <div className='minRequirements' style={{marginRight : "10px", width : "50%"}}>
                        {minimum}
                    </div>
                    <div className='recRequirements' style={{width : "50%"}}>
                        {recommended}
                    </div>
                </div>
            </div>
        )
    };

    return (
        <Gameinfopage className='gameInfoPage'>
            {gameInfo ? (
                <Mainbox className='mainInfoBox'>
                    <Gameintrobox className='gameIntroBox'>
                        <Gametitlebox className='gameTitleBox'>
                            <Gametitle className='gameTitle'>
                                {gameInfo.name}
                            </Gametitle>
                        </Gametitlebox>
                        <Mediaswiper imgs={gameInfo.screenshots} vids={gameInfo.movies} />
                        <Gameintro className='gameIntroInfo'>
                            <Introimgbox className='introImgBox'>
                                <img style={{width : "100%", height : "100%"}} src={`${gameInfo.capsule_image}`} alt='CS GO'></img>
                            </Introimgbox>
                            <Introtextbox className='introTextBox'>
                                <Introtext className='introText'>
                                    {gameInfo.short_description}
                                </Introtext>
                            </Introtextbox>
                            <Companybox className='companyBox'>
                                <Releasedatebox className='releaseDateBox'>
                                    <Releasedate className='releaseDate'>
                                        Release Date: {gameReleaseDate}
                                    </Releasedate>
                                </Releasedatebox>
                                <Developersbox className='devlopersBox'>
                                    <Developers className='developers'>
                                        Developers: {gameDevelopers}
                                    </Developers>
                                </Developersbox>
                                <Publisherbox className='publisherBox'>
                                    <Publisher className='publisher'>
                                        Publisher: {gamePublisher}
                                    </Publisher>
                                </Publisherbox>
                            </Companybox>
                        </Gameintro>
                    </Gameintrobox>
                    <Gamedetailbox className='gameDetailBox'>
                        <Aboutthegame className='aboutTheGame'>
                            <Aboutthegametext className='aboutTheGameText'>
                                <Detailtitle>
                                    about this game : 
                                </Detailtitle>
                                <HtmlContent htmlcontent={aboutTheGame} />
                            </Aboutthegametext>
                        </Aboutthegame>
                        <Maturecontent className='matureContent'>
                            <Detailtitle>
                                mature content description : 
                            </Detailtitle> 
                            <Maturecontenttext className='matureContentText'>
                                {gameInfo.content_descriptors.notes}
                            </Maturecontenttext>
                        </Maturecontent>
                        <Specrequirements className='specRequirements'>
                            <Detailtitle>
                                System Requirements
                            </Detailtitle>
                            <Tabmenu />
                        </Specrequirements>
                    </Gamedetailbox>
                </Mainbox>
            ) : (<img src={loadingGIF} alt='loading' />) }
        </Gameinfopage>
    )
}

export default Gameinfo;