<template>
<div id="box">
<h1>할일 {{ todo.id ? '수정' : '등록' }}</h1>
<input type="text" v-model.trim="todo.title" placeholder="제목을 입력하세요"/>
<textarea v-model.trim="todo.description" placeholder="내용을 입력하세요"></textarea>
<div>
<label>날짜:</label>
<input type="date" v-model="todo.due_date" />
<button type="button" @click="save" :disabled="!todo.title"> 저장</button>
<button type="button" @click="remove"> 삭제</button>
<button type="button" @click="cancel"> 취소</button>
</div>
</div>
</template>
<script>
import axios from "axios";
export default {
name: "TodoView",
data() {
return {
todo: { }
};
},
mounted() {
if (this.$route.params.id) {
axios.get("http://localhost:8088/todo/" + this.$route.params.id)
.then(response => this.todo = response.data)
.catch(error => this.onError(error));
} else
this.todo = { }
},
methods: {
save() {
if (this.todo.id)
axios.put("http://localhost:8088/todo/update", this.todo)
.then(() => this.$router.push('todolist') )
.catch(error => this.onError(error));
else
axios.post("http://localhost:8088/todo/add", this.todo)
.then(() => this.$router.push('todolist') )
.catch(error => this.onError(error));
},
remove() {
axios.delete("http://localhost:8088/todo/delete?idlist=" + this.todo.id)
.then(() => this.$router.push('todolist') )
.catch(error => this.onError(error));
},
cancel() {
this.$router.push('todolist');
},
onError: function(error) {
console.log(error);
alert(error.message);
}
}
}
</script>
<style scoped>
h1 { border-bottom: 1px solid gray; }
div#box { padding: 30px; margin: 30px auto; width: 600px;
border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
text-align: left;
}
input[type=text], input[type=date] { padding: 6px; font-size: 12pt; }
input[type=text] { width: 100%; margin-bottom: 10px; }
textarea { padding: 6px; width: 100%; height: 250px; margin-bottom: 10px; font-size: 12pt; }
button { padding: 0.3em 1.3em; margin-left: 5px; font-size: 11pt; }
</style>