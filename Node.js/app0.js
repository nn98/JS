const express = require('express');
const path=require('path');
const app=express();

// 기존 포트 살리고 추가 포트를 추가 => ||
app.set('port',process.env.PORT || 21007);

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