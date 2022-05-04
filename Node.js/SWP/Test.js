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
// const indexRouter = require('./routes')
// const usersRouter = require('./routes/users')
const solvedrankRouter = require('./routes/solvedrank')

// app.use('/', indexRouter)
// app.use('/users', usersRouter)


// app.use('/solvedrank', solvedrankRouter)

/*
front     /
user      /user/UserID
rec-Alg   /algsuggest
rec-Tier  /tiersuggest
*/
console.log("DB Connecting");
app.get("/Solvedrank", function (req, res) {
    connection.query('select * from Solvedrank;', function (err, rows) {
      console.log('Get Solvedrank');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});
app.get("/Algorithm", function (req, res) {
    connection.query('select * from Algorithm;', function (err, rows) {
      console.log('Get Algorithm');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});
app.get("/Problem", function (req, res) {
    connection.query('select * from Problem;', function (err, rows) {
      console.log('Get Problem');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});
app.get("/Ranking", function (req, res) {
    connection.query('select * from Ranking;', function (err, rows) {
      console.log('Get Ranking');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});
app.get("/Solve", function (req, res) {
    connection.query('select * from Solve;', function (err, rows) {
      console.log('Get Solve');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});
app.get("/User", function (req, res) {
    connection.query('select * from User;', function (err, rows) {
      console.log('Get User');
        if (err) {
          console.log("err :"+err)
        }
        res.json(rows);
    });
});
app.get("/User/q9922000", function (req, res) {
    connection.query('select * from User where id="q9922000";', function (err, rows) {
      console.log('Get q9922000');
        if (err) {
          console.log("err :"+err)
        }
        console.log(rows);
        res.json(rows);
    });
});
app.get("/PROBLEM_has_Algorithm", function (req, res) {
    connection.query('select * from PROBLEM_has_Algorithm;', function (err, rows) {
      console.log('Get PROBLEM_has_Algorithm');
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