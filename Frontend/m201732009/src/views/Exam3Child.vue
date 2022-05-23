<template>
  <div class="box1">
    <input type="text" v-bind="title"/> <br><br>
    <button type="button" class="a" @click="$emit('send', title)"> Ok </button>
  </div>
</template>
<script>
export default {
  name: "Exam1Child",
  props: {
    num1: { type: Number, default: 3 },
    num2: { type: Number, default: 4 },
  },
  data() {
    return {
      title: "",
    };
  },
};
</script>
<style scoped>
div.box1 {
  padding: 10px;
  width: 98%;
  background-color: #bfb;
}
button.a{
  padding: 5px 15px 5px 15px;
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