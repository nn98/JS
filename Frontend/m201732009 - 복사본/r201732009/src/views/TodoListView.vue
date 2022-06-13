<template>
<div id="box">
<h1>할 일</h1>
<table>
<tr>
<td class="id">id</td>
<td class="title">제목</td>
<td class="date">날짜</td>
</tr>
<tr v-for="todo in todoList" v-bind:key="todo.id" v-on:click="edit(todo.id)">
<td>{{ todo.id }}</td>
<td>{{ todo.title }}</td>
<td>{{ todo.due_date }}</td>
</tr>
</table>
<button type="button" v-on:click="add">할일 추가</button>
<button type="button" v-on:click="reload">새로고침</button>
</div>
</template>
<script>
import axios from "axios";
export default {
name: "TodoListView",
data() {
return {
todoList: []
};
},
mounted() {
this.reload();
},
methods: {
reload() {
axios.get("http://localhost:8088/todo/list")
.then(response => this.todoList = response.data )
.catch(error => this.onError(error));
},
add() {
this.$router.push("todo");
},
edit(id) {
this.$router.push({ name: "todo", params: { id: id }});
},
onError: function(error) {
console.log(error);
alert(error.message);
}
}
}
</script>
<style scoped>
div#box { padding: 30px; margin: 30px auto; width: 600px;
border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
text-align: left;
}
h1 { border-bottom: 1px solid gray; }
button { padding: 0.4em 1.4em; margin-right: 5px; font-size: 11pt; }
table { border-collapse: collapse; margin-bottom: 20px; }
tr:nth-child(1) { background-color: #ddd; }
td { padding: 5px; border: 1px solid #aaa; }
td.id { width: 70px; }
td.title { width: 300px; }
td.date { width: 100px; }
tr:not(:nth-child(1)):hover { background-color: #ffa; cursor: pointer; }
</style>
