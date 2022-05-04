// 시퀄 사용해 users 테이블/user 객체와 매핑
const Sequelize = require('sequelize')
// module로 export - User 객체 생성 - Sequelize.Model 상속
module.exports = class Solvedrank extends Sequelize.Model {
  // init/associate
  // init-1 테이블 내부 컬럼 설정
  static init(sequelize) {
    return super.init(
      // 시퀄 - id 기본 키로 매핑. id 컬럼 설정 X + 시퀄과 MySQL 자료형 표현 상이.
      {
        // name
        ID: {
          // MySQL: VARCHAR
          type: Sequelize.INTEGER, // 시퀄: String
          // NOT NULL
          allowNull: false, // allowNull
          // UNIQUE
          unique: true, //unique
          // 동명이인 멸시;
        },
        // age
        tier: {
          type: Sequelize.STRING(25), // 시퀄: String
          allowNull: false, // 동일 속성 생략
        }
      },
      // super.init-2 테이블 옵션. 단순암기이므로 그냥 복붙
      {
        // static init 메서드의 매개변수와 연결되는 옵션으로 db.sequelize 객체를 넣어야 합니다. 나중에 model/index.js에서 연결합니다.
        sequelize,
        // 현재 false로 되어 있으며, 이 속성 값이 true면 시퀄라이즈는 createdAt과 updatedAt 컬럼을 추가합니다. 각각 로우가 생성될 때와 수정될 때의 시간이 자동으로 입력됩니다. 하지만 예제에서는 직접 created_at 컬럼을 만들었으므로 timestamps 속성이 필요하지 않습니다. 따라서 속성값을 false로 하여 자동으로 날짜 컬럼을 추가하는 기능을 해제했습니다.
        timestamps: false,
        // 시퀄라이즈는 기본적으로 테이블명과 컬럼명을 캐멀 케이스(camel case)(예시: createdAt)로 만듭니다. 이를 스네이크 케이스(snake case)(예시: created_at)로 바꾸는 옵션입니다.
        underscored: false,
        // 모델 이름을 설정할 수 있습니다. 노드 프로젝트에서 사용합니다.
        modelName: 'User',
        // 실제 데이터베이스의 테이블 이름이 됩니다. 기본적으로는 모델 이름을 소문자 및 복수형으로 만듭니다. 모델 이름이 User라면 테이블 이름은 users가 됩니다.
        tableName: 'users',
        // true로 설정하면 deletedAt이라는 컬럼이 생깁니다. 로우를 삭제할 때 완전히 지워지지 않고 deletedAt에 지운 시각이 기록됩니다. 로우를 조회하는 명령을 내렸을 때는 deletedAt의 값이 null인 로우(삭제되지 않았다는 뜻)를 조회합니다. 이렇게 하는 이유는 나중에 로우를 복원하기 위해서입니다. 로우를 복원해야 하는 상황이 생길 것 같다면 미리 true로 설정해두세요.
        paranoid: false,
        // 각각 utf8과 utf8_general_ci로 설정해야 한글이 입력됩니다. 이모티콘까지 입력할 수 있게 하고 싶다면 utf8mb4와 utf8mb4_general_ci를 입력합니다.
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    )
  }
  // associate - relation between table(==foreign key)
  static associate(db) {
    // 1:N == hasMany
    // user column has many comment
    // db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' })
  }
}