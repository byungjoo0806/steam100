const router = require("express").Router();
const axios = require("axios");

let appID = "";
let appIDArr = [];
let appInfoArr = [];
// 프론트와 연결시키는 부분
// 해당 게임 이름을 가진 스팀 고유 번호 불러오기
router.get("/appList", async (req,res)=>{
    try {
        let rankById = [];
        let appName = [];
        const {data} = await axios.get("https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/");
        const rankArr = data.response.ranks;

        rankArr.map((el,index)=>{
            rankById.push(el.appid);
        });
        // console.log(appID);
        // appIDArr.push(appID);
        console.log(appIDArr);
        
        for (const appid of appIDArr){
            const {data} = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
            // console.log(data);
            appInfoArr.push(data[appid].data);
        };

        res.json(appName);
    } catch (error) {
        console.log(error);
    }
});

// 스팀 top 100 리스트에서 첫 10개 가져오기
let tenLess;
router.get("/top100", async (req,res)=>{
    try {
        let rankById = [];
        let appInfo = [];
        const {data} = await axios.get("https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/");
        const rankArr = data.response.ranks;

        rankArr.map((el,index)=>{
            rankById.push(el.appid);
        });
        // console.log(rankById);

        const topTen = rankById.splice(0,10);
        // console.log(rankById);
        tenLess = rankById;
        // console.log(topTen);

        for (const id of topTen){
            const {data} = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${id}`);
            // console.log(data);
            appInfo.push(data[id].data);
        };

        res.json(appInfo);
    } catch (error) {
        console.log(error);
    }
});

// 첫 10개 가져온 후, 10개씩 가져오기
router.get("/tenByTen", async (req,res)=>{
    try {
        let newTenInfo = [];
        // console.log(tenLess);
        const newTen = tenLess.splice(0,10);
        console.log(newTen);
        console.log(tenLess);

        for(const id of newTen){
            const {data} = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${id}`);
            newTenInfo.push(data[id].data);
        };
        res.json(newTenInfo);
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