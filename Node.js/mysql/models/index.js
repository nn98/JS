// 시퀄라이즈 패키지이자
const Sequelize = require('sequelize')
// user, comment model
const User = require('./user')
const Comment = require('./comment')
// env파일 | config의 development 사용
const env = process.env.NODE_ENV || 'development'
// config 파일 config로 정의
const config = require('../config/config')[env]
// db 정의 및 초기화
const db = {}
// config의 database, username, password, ect sequelize에 저장
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)
// 연결 객체 재사용 위해 db.sequelize에 저장
db.sequelize = sequelize
// User/Comment model save
db.User = User
db.Comment = Comment

/* 각 모델 init/associate 실행. 각 매개변수로 시퀄과 db 전송 */
// model.init > 해당 모델 static.init
User.init(sequelize)
Comment.init(sequelize)
// static.associate
User.associate(db)
Comment.associate(db)
module.exports = db