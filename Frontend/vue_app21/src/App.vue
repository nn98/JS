<template>
<div id="app">
<h1>MyCounter1</h1>
<MyCounter1 title="카운터" description="첫째 컴포넌트" />
<MyCounter1 title="카운터" description="둘째 컴포넌트" />
</div>
</template>
<script>
import MyCounter1 from './MyCounter1.vue'
export default {
name: "App",
components: { MyCounter1 }
}
</script>
<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>
