// 현재 미완성-실행 불가

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path=require('path');

// env file setting
dotenv.config();

const app=express();

// 기존 포트 살리고 추가 포트를 추가 => ||
app.set('port',process.env.PORT || 21007);

// run sequential without next()
app.use(morgan('dev'));
// 외부에서 확인시 public dir을 root로.
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.json());
// url encode
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
// 세션에 쿠키값 usual. 
app.use(session({
    resave: false,
    saveUninitialized: false,
    secet: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
    name:'session-cookie',
}));

app.use((req,res,next)=>{
    console.log('Run as All req');
    // run without params - next MiddleWare
    next();
});

app.get('/',(req,res,next)=>{       //MiddleWare 1
    console.log('Run as Get / ');
    next();
},(req,res)=>{                      //MiddleWare 2
    throw new Error('에러-에러 처리 미들웨어')
});

app.use((err,req,res,next)=>{       //MiddleWare for Err
    console.error(err);
    res.status(500).send(err.massage);
});

app.listen(21007,()=>{
    console.log('Server run in ',app.get('port'),'...');
});