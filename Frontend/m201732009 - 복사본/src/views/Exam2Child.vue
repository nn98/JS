<template>
  <span>
<<<<<<< HEAD
    <h1 class="box">{{ num1 }} + {{ num2 }} = {{ num1+num2 }}</h1>
=======
    <h1 class="box">{{ num1 }} + {{ num2 }} = {{ Number(Number(num1)+Number(num2)) }}</h1>
>>>>>>> 7df85b300926472bac66d41a5a3a675cd4d0115e
  </span>
</template>
<script>
export default {
<<<<<<< HEAD
  name: "Exam2Child",
  props: ['num1','num2']
=======
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
>>>>>>> 7df85b300926472bac66d41a5a3a675cd4d0115e
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