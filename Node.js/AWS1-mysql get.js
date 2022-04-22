var express = require('express')
var app = express()
var bodyParser = require('body-parser')


var mysql = require('mysql')

var connection = mysql.createConnection({
  host : "3.35.95.30",
  port : 3306,
  user : "Project",
  password : "testing00",
  database : "SWP"
})

console.log("ing");
app.get("/test", function (req, res) {
    connection.query('select * from Solvedrank;', function (err, rows) {
        if (err) {
          console.log("err :"+err)
        }
        console.log('Open DataBase');
        res.json(rows);
    });
});

app.post('/post', (req, res) => {
    console.log('who get in here post /users');
    connection.query('select * from Solvedrank;', function (err, rows) {
        if (err) {
          console.log("err :"+err)
        }

        console.log('Open DataBase');
        res.json(rows);
    });
});

app.listen(8888, () => {
    console.log('Example app listening on port 8888!');
});