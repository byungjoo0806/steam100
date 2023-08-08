const express = require('express');
const session = require('express-session');
const dot = require('dotenv').config();
const cors = require('cors');
const {sequelize} = require('./models');
const axios = require("axios");

const app = express();

const signUpRouter = require('./routers/signUp');
const loginRouter = require('./routers/login');
const postRouter = require('./routers/post');

sequelize.sync({force : false}).then(()=>{
    console.log('연결 성공');
}).catch((err)=>{
    console.log(err);
})

app.use(express.urlencoded({extended : false}));

app.use(express.json());

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}))

app.use(cors({
    origin : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials : true
}));

const appID = "";
// proxy 설정
app.get("/api/appList", async (req,res)=>{
    try {
        const {data : response} = await axios.get("https://api.steampowered.com/ISteamApps/GetAppList/v2/");
        const applist = response.applist;
        const appObject = applist.apps;
        // console.log(appObject);
        
        // res.json(response);
    } catch (error) {
        console.log(error);
    }
});

app.get("/api/appInfo", async (req,res)=>{
    try {
        const appId = req.query.id;
        
        const {data} = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
        // console.log(data[appId].data);
        const response = data[appId].data;
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});

app.use('/signUp',signUpRouter);
app.use('/login',loginRouter);
app.use('/post',postRouter);

app.listen(8080,()=>{
    console.log('server open');
})