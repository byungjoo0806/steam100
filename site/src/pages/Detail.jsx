import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import striptags from "striptags";

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

    return (
        <div style={{width : "100%", height : "100%", display : "flex", flexWrap : "wrap"}} className='Main'>
            <div style={{width : "1000px", height : "500px", border : "1px solid", display : "flex", flexWrap : "wrap", position : "relative"}} className='gameIntroBox'>
                <div className='gameTitle' style={{width : "500px", height : "10%", borderRight : "1px solid", display : "flex", justifyContent : "flex-start", alignItems : "end"}}>
                    {gameInfo ? gameInfo.name : "Loading..."}
                </div>
                <div className='gameImgVid' style={{width : "700px", height : "70%", borderTop : "1px solid", borderRight : "1px solid", borderBottom : "1px solid"}}>Game Img/Vid</div>
                <div className='gameImgVidSwiper' style={{width : "700px", height : "20%", borderRight : "1px solid"}}>Img/Vid Swiper</div>
                <div className='gameIntro' style={{width : "300px", height : "90%", borderTop : "1px solid", position : "absolute", right : "0", bottom : "0", boxSizing : "border-box"}}>
                    <div className='gameIntroImg' style={{width : "100%", height : "35%", borderBottom : "1px solid"}}>
                        {gameInfo ? <img style={{width : "100%", height : "100%"}} src={`${gameInfo.capsule_image}`} alt='CS GO'></img> : <div>Loading...</div>}
                    </div>
                    <div className='gameIntroText' style={{width : "100%", height : "35%", borderBottom : "1px solid", overflow : "hidden", fontSize : "15px", textAlign : "start"}}>
                        <p style={{margin : "5px"}}>{gameInfo ? gameInfo.description : "Loading..."}</p>
                    </div>
                    <div className='gameCompany' style={{width : "100%", height : "30%"}}>
                        <div className='gameReleaseDate'></div>
                        <div className='gameDeveloper'></div>
                        <div className='gamePublisher'></div>
                    </div>
                </div>
            </div>
            <div style={{width : "1000px", height : "700px", border : "1px solid"}} className='gameDetailBox'>
                <div style={{width : "100%", height : "33%", borderBottom : "1px solid"}}></div>
                <div style={{width : "100%", height : "33%", borderBottom : "1px solid"}}></div>
                <div style={{width : "100%", height : "34%"}}></div>
            </div>
            <div style={{width : "1000px", height : "700px", border : "1px solid"}} className='gameCommunityBox'>

            </div>
        </div>
    )
}

export default Detail;