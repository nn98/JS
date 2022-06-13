<template>
  <div>
    <h1>Exam1</h1>
    <input type="text" v-model="title" v-on:send="totitle" />
    <Exam1Child title="hello" v-on:send="totitle" />
  </div>
</template>
<script>
import Exam1Child from "./Exam1Child.vue";

export default {
  components: { Exam1Child },
  name: "MySelect3",
  methods: {
    totitle(title) {
      alert(title);
    }
  },
  props: {
    // title: { type: String, default: "hello" },
  },
  data: function() {
    return {
      title: "hello"
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