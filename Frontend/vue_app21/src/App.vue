<template>
  <div id="app">
    <h1>MyCounter2</h1>
    <MyCounter2
      title="카운터 2"
      description="첫째 컴포넌트"
      color="#ffb"
      v-on:send="showValue"
    />
    <MyCounter2 title="카운터 2" color="#afa" v-on:send="showValue" />
  </div>
</template>
<script>
import MyCounter2 from "./MyCounter2.vue";
export default {
  name: "App",
  methods: {
    showValue(value) {
      alert(value);
    },
  },
  components: { MyCounter2 },
};
</script>
<style scoped>
div#app {
  padding: 0 30px 30px 30px;
  margin: 30px auto;
  max-width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
</style>