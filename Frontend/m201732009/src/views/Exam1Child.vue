<template>
  <span>
    <h1 class="box">{{ title }}</h1>
  </span>
</template>
<script>
export default {
  name: "Exam1Child",
  props: {
    title: { type: String, default: "hello" },
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