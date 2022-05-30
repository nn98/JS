<template>
  <div>
    <h1>Exam2</h1>
<<<<<<< HEAD
    <input type="number" v-model.number="num1"/><br><br>
    <input type="number" v-model.number="num2"/>
    <Exam2Child v-bind:num1="num1" v-bind:enabled="true" v-bind:num2="num2" v-on:send="totitle" />
=======
    <input type="number" v-model="num1" v-on:send="totitle" /><br><br>
    <input type="number" v-model="num2" v-on:send="totitle" @click="$emit('send', num2)"/>
    <Exam2Child v-bind:num1=3 v-bind:enabled="true" v-bind:num2=4 v-on:send="totitle" />
>>>>>>> 7df85b300926472bac66d41a5a3a675cd4d0115e
  </div>
</template>
<script>
import Exam2Child from "./Exam2Child.vue";

export default {
  components: { Exam2Child },
  name: "MySelect3",
  methods: {
    totitle(title) {
      alert(title);
    }
  },
  props: {
  },
  data: function() {
    return {
      num1: 3,
      num2: 4
    };
  },
};
</script>
<style scoped>
div.box {
  display: inline-block;
  padding: 20px;
  width: 300px;
  border: 1px solid gray;
  box-shadow: 5px 5px 5px #aaa;
}
select {
  padding: 5px;
  font-size: 15pt;
  width: 150px;
  margin: 10px;
}
.yellow {
  background-color: #ffa;
}
.green {
  background-color: #bfb;
}
.blue {
  background-color: #bbf;
}
.red {
  background-color: #fbb;
}
</style>