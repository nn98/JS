<template>
  <div>
    <h1>Exam3</h1>
    <h4 v-on:send="showValue">world</h4>
    <Exam3Child />
  </div>
</template>
<script>
import Exam3Child from "./Exam3Child.vue";

export default {
  components: { Exam3Child },
  name: "MySelect3",

  methods: {
    showValue(value) {
      alert(value);
    },
  },

  props: {},
  data: function () {
    return {
      num1: 3,
      num2: 4,
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