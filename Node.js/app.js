const express = require('express');
const path=require('path');

const app=express();
// 기존 포트 살리고 추가 포트를 추가 => ||
app.set('port',process.env.PORT || 21007);

app.get('/',(req,res)=>{
    // res.send('Hello, Express!');
    res.sendFile(path.join(__dirname,'/index.html'))
});

app.listen(21007,()=>{
    console.log('Server run in ',app.get('port'),'...');
});