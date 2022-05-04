var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.set('port', process.env.PORT || 8888)

var mysql = require('mysql')

var connection = mysql.createConnection({
  host : "15.164.220.167",
  port : 3306,
  user : "Project",
  password : "testing00",
  database : "SWP"
})

/*
front     /
user      /user/UserID
rec-Alg   /algsuggest
rec-Tier  /tiersuggest
*/
console.log("DB Connecting");
app.get("/solvedrank", function (req, res) {
    connection.query('select * from Solvedrank;', function (err, rows) {
      console.log('Get solvedrank');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});

app.post('/post', (req, res) => {
    console.log('who get in here post /users');
    connection.query('select * from solved_rank;', function (err, rows) {
        if (err) {
          console.log("err :"+err)
        }

        console.log('Open DataBase');
        res.json(rows);
    });
});

app.listen(app.get('port'), () => {
    console.log('Example app listening on port 8888!');
});