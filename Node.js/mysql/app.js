/* 모듈/템플릿/객체 정의부 */
// express 모듈 정의 및 생성
const express = require('express')
// morgan 모듈 정의 및 생성 - 로깅용 미들웨어
const morgan = require('morgan')
// path 모듈 정의 및 생성
const path = require('path')

// app 객체 정의 및 생성
const app = express()
// nunjucks 템플릿 엔진 객체 정의 및 생성
const nunjucks = require('nunjucks')
// index/users/comments routing
const indexRouter = require('./routes')
const usersRouter = require('./routes/users')
const commentsRouter = require('./routes/comments')

// 시퀄라이즈: 자바스크립트 구문 SQL로 변환
const { sequelize } = require('./models')
// MySQL 조작 보조 라이브러리, ORM(Object-relational Mapping)==DTO

// set application port
app.set('port', process.env.PORT || 3001)
// set view/template engine-html
app.set('view engine', 'html')

// configure nunjucks, set nunjucks template dir 
nunjucks.configure('views', {
  // set express application
  express: app,
  // true - html 파일 변경시 템플릿 엔진 다시 렌더링
  watch: true,
})

// 시퀄 초기화. 강제성 설정 가능
sequelize
// Promise 반환하는 비동기 함수 - DB-Model 동기화, SQL 쿼리(./nodejs.sql) 자동 실행
  .sync({ force: false })
  // success,
  .then(() => {
    // log successfully connected
    console.log('데이터베이스 연결 성공')
  })
  // error,
  .catch((err) => {
    // notify error
    console.error(err)
  })

// morgan 미들웨어 사용
// 인수로 dev 외에 combined, common, short, tiny 등 사용 가능
app.use(morgan('dev'))
// by 'dev'
//      GET          /           500             7.401 ms    –        50
// [HTTP method] [adress] [HTTP status code] [response time] - [response byte]

// 정적 디렉토리로 js 파일 사용 미들웨어 함수. path 사용해 public dir 내부의 파일 제공
app.use(express.static(path.join(__dirname, 'public')))
// json payloads 요청 구문 분석? body-parser 기반이라는데 body-parser 안쓰는데
app.use(express.json())
// urlencoded payloads~위와 동일
app.use(express.urlencoded({ extended: false }))

// 사전에 생성된 라우터 연동
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/comments', commentsRouter)

// 요청된 URL에 해당하는 라우터가 없다면 404 상태 코드를 응답하는 미들웨어
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404
  next(error)
})

// 404 코드 + 추가 정보 리턴|리스폰스|응답
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

// 설정된 포트로 서버 실행
app.listen(app.get('port'), () => {
  // 포트 및 서버 실행 안내
  console.log(app.get('port'), '번 포트에서 대기 중')
})
