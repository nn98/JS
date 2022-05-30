<template>
  <div>
    <h1>Exam4</h1>
    <h4>3 * 4 = 12</h4>
    <Exam4Child/>
  </div>
</template>
<script>
import Exam4Child from "./Exam4Child.vue";

export default {
  components: { Exam4Child },
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