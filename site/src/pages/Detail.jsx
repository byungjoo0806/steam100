import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Detail = () => {
    // --------------------- 프론트에서 api 직접 가져오기 ----------------------
    // const fetchAppList = async () => {
    //     const response = await fetch("/ISteamApps/GetAppList/v2/");
    //     const data = await response.json();
    //     return data;
    // };

    // const { data, error, isLoading } = useQuery("appList", fetchAppList);

    // if(isLoading){
    //     console.log("Loading");
    // }else if(error){
    //     console.log(error);
    // }else{
    //     console.log(data);
    // }
    
    // ---------------- 백에서 api 가져와서 프론트로 넘겨주기 -----------------------
    const [appId, setAppId] = useState();

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
            console.log(info.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchAppList();

    //---------------------------- 해당 게임 정보 가져오는 api ----------------------------
    // const fetchAppInfo = async ()=>{
    //     try {
                // const info = await axios.get("http://localhost:8080/api/appInfo",{
                //     withCredentials : true,
                // });
                // console.log(info.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div style={{width : "100%", height : "200px", display : "flex", justifyContent : "center", alignItems : "center"}}>
            <button>get list</button> <br/>
        </div>
    )
}

export default Detail;