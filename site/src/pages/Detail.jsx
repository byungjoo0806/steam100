import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useQuery } from "react-query";

const Detail = (game) => {
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

    const fetchAppList = async ()=>{
        try {
            const response = await axios.get("http://localhost:8080/api/appList",{
                withCredentials : true,
                params : {
                    name : game,
                }
            });
            // const data = response.data;
            // const applist = data.applist;
            // const appObject = applist.apps;
            // // console.log(appObject);
            // // console.log(appObject[99]);
            // // console.log(typeof appObject[99].name);
            // // console.log(appObject[99].name.includes("Dep"));

            // appObject.map((el,index)=>{
            //     if(el.name.includes("PUBG: BATTLEGROUNDS")){
            //         console.log(el);
            //         console.log(el.appid);
            //         setAppId(el.appid);
            //     };
            // });
            // console.log(appId);
            
        } catch (error) {
            console.log(error);
        }
    };

    //---------------------------- 해당 게임 정보 가져오는 api ----------------------------
    // const fetchAppInfo = async ()=>{
    //     try {
    //         const info = await axios.get("http://localhost:8080/api/appInfo",{
    //             withCredentials : true,
    //             params : {
    //                 id : appId
    //             }
    //         });
    //         console.log(info.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div style={{width : "100%", height : "200px", display : "flex", justifyContent : "center", alignItems : "center"}}>
            <button onClick={fetchAppList}>get list</button> <br/>
        </div>
    )
}

export default Detail;