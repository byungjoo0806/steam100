import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import striptags from "striptags";
import DOMPurify from 'dompurify';

import Mediaswiper from "../components/swiper/Mediaswiper";

const Detail = () => {
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

    // 게임 내용
    const aboutTheGame = gameInfo?.about_the_game;

    // 운영체제에 따른 최소 사양
    const windowsRequirements = gameInfo?.pc_requirements?.minimum;
    const macRequirements = gameInfo?.mac_requirements?.minimum;
    const linuxRequirements = gameInfo?.linux_requirements?.minimum


    // html 형식으로 들어온 값들을 그 형식 그대로 보여주기 위한 함수/컴포넌트
    const HtmlContent = ({htmlcontent})=>{
        const sanitizedHtml = DOMPurify.sanitize(htmlcontent);

        return (
            <div dangerouslySetInnerHTML={{__html : sanitizedHtml}} style={{marginLeft : "5px"}}></div>
        )
    };


    // 최소 사양 보여주는 부분을 운영체제에 따른 탭으로 구분하기
    const Tabmenu = () => {
        const [activeTab, setActiveTab] = useState(1);
    
        const handleTabClick = (tabIndex)=>{
            setActiveTab(tabIndex);
        };
    
        let content;

        switch (activeTab) {
            case 1:
                content = <HtmlContent htmlcontent={windowsRequirements} />
                break;
            case 2:
                content = <HtmlContent htmlcontent={macRequirements} />
                break;
            case 3:
                content = <HtmlContent htmlcontent={linuxRequirements} />
                break;
            default:
                content = <div>No content available</div>
        }
    
        return (
            <div>
                <div>
                    <button onClick={()=>handleTabClick(1)}>Windows</button>
                    <button onClick={()=>handleTabClick(2)}>Mac</button>
                    <button onClick={()=>handleTabClick(3)}>Linux</button>
                </div>
                <div>
                    {content}
                </div>
            </div>
        )
    };

    return (
        <div style={{width : "100%", height : "100%", display : "flex", flexWrap : "wrap", marginTop : "10px"}} className='Main'>
            <div style={{width : "1000px", height : "500px", border : "1px solid", display : "flex", flexWrap : "wrap", position : "relative"}} className='gameIntroBox'>
                <div className='gameTitle' style={{width : "500px", height : "10%", borderRight : "1px solid", display : "flex", justifyContent : "flex-start", alignItems : "end"}}>
                    <p style={{marginLeft : "5px", fontSize : "25px"}}>{gameInfo ? gameInfo.name : "Loading..."}</p>
                </div>
                <Mediaswiper imgs={gameInfo?.screenshots} vids={gameInfo?.movies} />
                <div className='gameIntro' style={{width : "310px", height : "90%", borderTop : "1px solid", position : "absolute", right : "0", bottom : "0", boxSizing : "border-box"}}>
                    <div className='gameIntroImg' style={{width : "100%", height : "35%", borderBottom : "1px solid"}}>
                        {gameInfo ? <img style={{width : "100%", height : "100%"}} src={`${gameInfo.capsule_image}`} alt='CS GO'></img> : <div>Loading...</div>}
                    </div>
                    <div className='gameIntroText' style={{width : "100%", height : "35%", borderBottom : "1px solid", overflow : "hidden", fontSize : "15px", textAlign : "start"}}>
                        <p style={{marginLeft : "5px"}}>{gameInfo ? gameInfo.short_description : "Loading..."}</p>
                    </div>
                    <div className='gameCompany' style={{width : "100%", height : "30%", display : "flex", flexWrap : "wrap", alignContent : "center"}}>
                        <div className='gameReleaseDate' style={{width : "100%", height : "20%"}}>
                            <div style={{display : "flex", justifyContent : "flex-start", alignItems : "center", marginLeft : "5px"}}>
                                Release Date: {gameInfo ? gameInfo.release_date.date : "Loading..."}
                            </div>
                        </div>
                        <div className='gameDeveloper' style={{width : "100%", height : "20%"}}>
                            <div style={{display : "flex", justifyContent : "flex-start", alignItems : "center", marginLeft : "5px"}}>
                                Developers: {gameInfo ? gameInfo.developers.toString() : "Loading..."}
                            </div>
                        </div>
                        <div className='gamePublisher' style={{width : "100%", height : "20%"}}>
                            <div style={{display : "flex", justifyContent : "flex-start", alignItems : "center", marginLeft : "5px"}}>
                                Publishers: {gameInfo ? gameInfo.publishers.toString() : "Loading..."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div style={{width : "1000px", height : "auto", border : "1px solid"}} className='gameDetailBox'>
                <div style={{width : "100%", height : "auto", borderBottom : "1px solid", display : "flex", flexWrap : "wrap", textAlign : "left"}}>
                    <div style={{marginLeft : "5px"}}>
                        about this game : <br/>
                    </div>
                    <HtmlContent htmlcontent={aboutTheGame} />
                </div>
                <div className='gameMatureContent' style={{width : "100%", height : "auto", borderBottom : "1px solid", textAlign : "left"}}>
                    <div style={{marginLeft : "5px"}}>
                        mature content description : <br/>
                        {gameInfo ? gameInfo.content_descriptors.notes : "Loading..."}
                    </div>
                </div>
                <div className='gameSystemRequirements' style={{width : "100%", height : "auto", textAlign : "left"}}>
                    <Tabmenu />
                </div>
            </div>
        </div>
    )
}

export default Detail;