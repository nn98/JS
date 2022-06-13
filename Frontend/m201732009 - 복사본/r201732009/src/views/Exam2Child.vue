<template>
  <span>
    <h1 class="box">{{ num1 }} + {{ num2 }} = {{ Number(Number(num1)+Number(num2)) }}</h1>
  </span>
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
      color: "green",
    };
  },
};
</script>
<style scoped>
h1.box {
  padding: 5px;
  width: 98%;
  background-color: #bfb;
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