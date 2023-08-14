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
    // fetchAppList();

    return (
        <div style={{width : "100%", height : "100%", display : "flex", flexWrap : "wrap"}} className='Main'>
            <div style={{width : "1000px", height : "700px", border : "1px solid", display : "flex", flexWrap : "wrap", boxSizing : "content-box"}} className='gameIntroBox'>
                <div className='gameTitle' style={{width : "500px", height : "50px", border : "1px solid"}}></div>
                <div className='gameImgVid' style={{width : "700px", height : "500px", border : "1px solid"}}></div>
                <div className='gameImgVidSwiper' style={{width : "700px", height : "150px", border : "1px solid"}}></div>
                <div className='gameIntro' style={{width : "300px", height : "650px", border : "1px solid"}}></div>
            </div>
            <div style={{width : "1000px", height : "700px", border : "1px solid"}} className='gameIntroBox'>

            </div>
            <div style={{width : "1000px", height : "700px", border : "1px solid"}} className='gameIntroBox'>

            </div>
        </div>
    )
}

export default Detail;