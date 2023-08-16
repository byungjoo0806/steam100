const router = require("express").Router();
const axios = require("axios");

let appID = "";
let appIDArr = [];
let appInfoArr = [];
// 프론트와 연결시키는 부분
// 해당 게임 이름을 가진 스팀 고유 번호 불러오기
router.get("/appList", async (req,res)=>{
    const {game} = req.query;
    console.log(game);

    try {
        const {data : response} = await axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/");
        const applist = response.applist;
        const appObject = applist.apps;
        // console.log(appObject);
        // console.log(game.name);

        game.map((name,nameIdx)=>{
            const idCount = [];
            appObject.map((el,index)=>{
                if(el.name === name){
                    // console.log(el);
                    appID = el.appid;
                    console.log(appID);
                    idCount.push(appID);
                    // idNumCheck.push(appID);
                    // console.log(idNumCheck);
                    // if(idNumCheck.length >= 2){
                    //     appIDArr.push(idNumCheck[idNumCheck.length - 1]);
                    // }else{
                    //     appIDArr.push(appID);
                    // }
                }
            });
            console.log(idCount);

            appIDArr.push(idCount[0]);
        });
        // console.log(appID);
        // appIDArr.push(appID);
        console.log(appIDArr);
        
        for (const appid of appIDArr){
            const {data} = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
            // console.log(data);
            appInfoArr.push(data[appid].data);
        };

        res.json(appInfoArr);
    } catch (error) {
        console.log(error);
    }
});

// 해당 스팀 게임 아이디를 통해 해당 게임 정보 불러오기
// router.get("/appInfo", async (req,res)=>{
//     try {
//         // appID = req.query.id;
//         for(const appid of appIDArr){
//             const {data} = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
//             // console.log(data[appid].data);
//             appInfoArr.push(data[appid].data);
//         };
//         res.json(appInfoArr);
//     } catch (error) {
//         console.log(error);
//     }
// });

// 스팀 top 100 리스트
router.get("/top100", async (req,res)=>{
    try {
        let rankById = [];
        const {data} = await axios.get("https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/");
        const rankArr = data.response.ranks;

        rankArr.map((el,index)=>{
            rankById.push(el.appid);
        })
        console.log(rankById);

        const {data : response} = await axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/");
        const applist = response.applist;
        const appObject = applist.apps;
        // console.log(appObject);
        // console.log(game.name);
        let topGameNameArr = [];
        rankById.map((rank,rankIdx)=>{
            appObject.map((game,gameIdx)=>{
                if(rank === game.appid){
                    topGameNameArr.push(game.name);
                };
            });
        });
        console.log(topGameNameArr);
        // console.log(appID);
        res.json(topGameNameArr);
    } catch (error) {
        console.log(error);
    }
});



// ------------------ 디테일 페이지 전용 api 가져오기 ----------------------
router.get("/detailApp", async (req,res)=>{
    const {game} = req.query;
    console.log(game);
    try {
        const {data} = await axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/");
        // console.log(data.applist.apps);
        const wholeList = data.applist.apps;

        let appID = "";
        wholeList.map((el,index)=>{
            if(el.name === game){
                console.log(el);
                appID = el.appid;
            }
        });

        const info = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appID}`);
        // console.log(info.data[appID].data);
        const appInfo = info.data[appID].data;

        res.json(appInfo);
    } catch (error) {
        console.log(error);
    } 
});

module.exports = router;