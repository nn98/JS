// 시퀄 사용해 comments 테이블/comment 객체와 매핑
const Sequelize = require('sequelize')
// module로 export - Comments 객체 생성 - Sequelize.Model 상속
module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // comment
        comment: {
          // 타입 및 속성 생략(user.js에서 설명)
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        // created_at
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        // 옵션 생략(user.js에서 설명)
        sequelize,
        timestamps: false,
        modelName: 'Comment',
        tableName: 'comments',
        paranoid: false,
        charset: 'utf8mb4', // utf8mb4 사용 - 이모티콘 입력 가능
        collate: 'utf8mb4_general_ci',
      }
    )
  }

  //skip(by user.js)
  static associate(db) {
    // N:1 == belongsTo
    // comments 테이블의 commenter 필드 값 - 해당 코멘트 작성자 User의 id값 참조.
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' })
  }
}