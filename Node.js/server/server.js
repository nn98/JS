const express = require('express');
const path = require('path');
const test = require('.//Router/test');
const app = express();

app.use('/', test);

app.get('/test',async(req,res)=>{
    res.json('test data');
});

const http = require('http').createServer(app);
http.listen(8088, function () {
  console.log('listening on 8088')
});


const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});