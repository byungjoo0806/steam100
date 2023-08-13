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
            const response = await axios.get("http://localhost:8080/api/appList",{
                withCredentials : true,
                params : {
                    name : game,
                }
            });

            const info = await axios.get("http://localhost:8080/api/appInfo",{
                withCredentials : true,
            });
            console.log(info);
        } catch (error) {
            console.log(error);
        }
    };
    fetchAppList();

    return (
        <div style={{width : "100%", height : "200px", display : "flex", justifyContent : "center", alignItems : "center"}}>
            <button>get list</button> <br/>
        </div>
    )
}

export default Detail;