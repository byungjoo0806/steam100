import React from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Detail = () => {
    // ---------------- 백에서 api 가져와서 프론트로 넘겨주기 -----------------------

    const location = useLocation();
    console.log(location);
    const game = location.state.gameName;
    console.log(game);

    const fetchAppList = async ()=>{
        try {
            const {data} = await axios.get("http://localhost:8080/api/detailApp",{
                withCredentials : true,
                params : {
                    game : game,
                }
            });

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchAppList();

    return (
        <div style={{width : "100%", height : "100%", display : "flex", flexWrap : "wrap"}} className='Main'>
            <div style={{width : "1000px", height : "500px", border : "1px solid", display : "flex", flexWrap : "wrap", position : "relative"}} className='gameIntroBox'>
                <div className='gameTitle' style={{width : "500px", height : "10%", borderRight : "1px solid", display : "flex", justifyContent : "flex-start", alignItems : "end"}}>Game Title</div>
                <div className='gameImgVid' style={{width : "700px", height : "70%", borderTop : "1px solid", borderRight : "1px solid", borderBottom : "1px solid"}}>Game Img/Vid</div>
                <div className='gameImgVidSwiper' style={{width : "700px", height : "20%", borderRight : "1px solid"}}>Img/Vid Swiper</div>
                <div className='gameIntro' style={{width : "300px", height : "90%", borderTop : "1px solid", position : "absolute", right : "0", bottom : "0", boxSizing : "border-box"}}>
                    <div className='gameIntroImg' style={{width : "100%", height : "33%", borderBottom : "1px solid"}}></div>
                    <div className='gameIntroText' style={{width : "100%", height : "33%", borderBottom : "1px solid"}}></div>
                    <div className='gameCompany'>
                        <div className='gameReleaseDate'></div>
                        <div className='gameDeveloper'></div>
                        <div className='gamePublisher'></div>
                    </div>
                </div>
            </div>
            <div style={{width : "1000px", height : "700px", border : "1px solid"}} className='gameIntroBox'>
                <div style={{width : "100%", height : "33%", borderBottom : "1px solid"}}></div>
                <div style={{width : "100%", height : "33%", borderBottom : "1px solid"}}></div>
                <div style={{width : "100%", height : "34%"}}></div>
            </div>
            <div style={{width : "1000px", height : "700px", border : "1px solid"}} className='gameIntroBox'>

            </div>
        </div>
    )
}

export default Detail;