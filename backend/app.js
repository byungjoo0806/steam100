const express = require('express');
const session = require('express-session');
const dot = require('dotenv').config();
const cors = require('cors');
const {sequelize} = require('./models');
const cookieParser = require('cookie-parser')
const axios = require("axios");

const app = express();

const signUpRouter = require('./routers/signUp');
const loginRouter = require('./routers/login');
const postRouter = require('./routers/post');
const mypageRouter = require('./routers/mypage');
const apiRouter = require('./routers/webAPI');

sequelize.sync({force : false}).then(()=>{
    console.log('연결 성공');
}).catch((err)=>{
    console.log(err);
})
app.use(cookieParser());

app.use(express.urlencoded({extended : false}));

app.use(express.json());

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}))

app.use(cors({
    origin : process.env.FRONT_SERVER,
    credentials : true
}));

app.use('/signUp',signUpRouter);
app.use('/login',loginRouter);
app.use('/post',postRouter);
app.use('/mypage',mypageRouter);
app.use('/api',apiRouter);

app.listen(8080,()=>{
    console.log('server open');
})