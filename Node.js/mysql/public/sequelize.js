// 사용자 클릭 시 해당 사용자의 댓글 로딩
document.querySelectorAll('#user-list tr').forEach((el) => {
  el.addEventListener('click', function () {
    const id = el.querySelector('td').textContent
    getComment(id)
  })
})
// 사용자 get
async function getUser() {
  try {
    const res = await axios.get('/users')
    const users = res.data
    console.log(users)
    const tbody = document.querySelector('#user-list tbody')
    tbody.innerHTML = ''
    users.map(function (user) {
      const row = document.createElement('tr')
      row.addEventListener('click', () => {
        getComment(user.id)
      })
      // get한 사용자 정보로 행 추가
      let td = document.createElement('td')
      td.textContent = user.id
      row.appendChild(td)
      td = document.createElement('td')
      td.textContent = user.name
      row.appendChild(td)
      td = document.createElement('td')
      td.textContent = user.age
      row.appendChild(td)
      td = document.createElement('td')
      td.textContent = user.married ? '기혼' : '미혼'
      row.appendChild(td)
      tbody.appendChild(row)
    })
  } catch (err) {
    // 에러 발생 시 에러 알림
    console.error(err)
  }
}

// 댓글 get
async function getComment(id) {
  try {
    const res = await axios.get(`/users/${id}/comments`)
    const comments = res.data
    const tbody = document.querySelector('#comment-list tbody')
    tbody.innerHTML = ''
    comments.map(function (comment) {
      // get한 댓글 정보로 행 추가
      const row = document.createElement('tr')
      let td = document.createElement('td')
      td.textContent = comment.id
      row.appendChild(td)
      td = document.createElement('td')
      td.textContent = comment.User.name
      row.appendChild(td)
      td = document.createElement('td')
      td.textContent = comment.comment
      row.appendChild(td)
      // 수정 버튼 추가
      const edit = document.createElement('button')
      edit.textContent = '수정'
      edit.addEventListener('click', async () => {
        // 수정 클릭 시 프롬프트 전송
        const newComment = prompt('바꿀 내용을 입력하세요')
        if (!newComment) {
          // 입력값 없을 경우 alert
          return alert('내용을 반드시 입력하셔야 합니다')
        }
        try {
          // 비동기로 값 수정 patch 메소드 연결
          await axios.patch(`/comments/${comment.id}`, { comment: newComment })
          // 수정된 댓글 get
          getComment(id)
        } catch (err) {
          // 에러 발생 시 에러 알림
          console.error(err)
        }
      })
      // 삭제 버튼 추가
      const remove = document.createElement('button')
      remove.textContent = '삭제'
      remove.addEventListener('click', async () => {
        // 삭제 클릭 시
        try {

          /* 추가 코드 */
          if (confirm('삭제하시겠습니까?')) {
            await axios.delete(`/comments/${comment.id}`)
            getComment(id)
          } else {
            alert('삭제를 취소하셨습니다.')
          }
          /* 추가 코드 */

        } catch (err) {
          // 에러 발생 시 에러 알림
          console.error(err)
        }
      })
      // 각 버튼 추가
      td = document.createElement('td')
      td.appendChild(edit)
      row.appendChild(td)
      td = document.createElement('td')
      td.appendChild(remove)
      row.appendChild(td)
      tbody.appendChild(row)
    })
  } catch (err) {
    // 에러 발생 시 에러 알림
    console.error(err)
  }
}
// 사용자 등록 시
document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  // 각 값 정의 및 생성
  const name = e.target.username.value
  const age = e.target.age.value
  const married = e.target.married.checked
  if (!name) {
    // 입력값 없을 경우 alert
    return alert('이름을 입력하세요')
  }
  if (!age) {
    // 입력값 없을 경우 alert
    return alert('나이를 입력하세요')
  }
  try {
    // post 메소드로 유저 등록 후 get
    await axios.post('/users', { name, age, married })
    getUser()
  } catch (err) {
    // 에러 발생 시 에러 알림
    console.error(err)
  }
  // 기본값 지정
  e.target.username.value = ''
  e.target.age.value = ''
  e.target.married.checked = false
})
// 댓글 등록 시
document
  .getElementById('comment-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault()
    const id = e.target.userid.value
    const comment = e.target.comment.value
    if (!id) {
      // 입력값 없을 경우 alert
      return alert('아이디를 입력하세요')
    }
    if (!comment) {
      // 입력값 없을 경우 alert
      return alert('댓글을 입력하세요')
    }
    try {
      // post 메소드로 댓글 등록 후 get
      await axios.post('/comments', { id, comment })
      getComment(id)
    } catch (err) {
      // 에러 발생 시 에러 알림
      console.error(err)
    }
    // 기본값 지정
    e.target.userid.value = ''
    e.target.comment.value = ''
  })