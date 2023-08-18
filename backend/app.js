const express = require('express');
const session = require('express-session');
const dot = require('dotenv').config();
const cors = require('cors');
const {sequelize} = require('./models');
const cookieParser = require('cookie-parser')
const axios = require("axios");
const path = require('path');

const app = express();

const signUpRouter = require('./routers/signUp');
const loginRouter = require('./routers/login');
const postRouter = require('./routers/post');
const mypageRouter = require('./routers/mypage');
const apiRouter = require('./routers/webAPI');
const replyRouter = require('./routers/reply');
const rereplyRouter = require('./routers/rereply');

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
    origin : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials : true
}));

app.use('/signUp',signUpRouter);
app.use('/login',loginRouter);
app.use('/post',postRouter);
app.use('/mypage',mypageRouter);
app.use('/api',apiRouter);
app.use('/reply', replyRouter);
app.use('/rereply', rereplyRouter);

app.listen(8080,()=>{
    console.log('server open');
})