rc/App.vue
<template>
<div id="app">
<h1>시계</h1>
<MyClock v-if="showTimer"></MyClock>
<div>
<button type="button" @click="showTimer = true"
:disabled="showTimer">시계 보이기</button>
<button type="button" @click="showTimer = false"
:disabled="!showTimer">시계 감추기</button>
</div>
</div>
</template>
<script>
import MyClock from './MyClock.vue'
export default {
name: "App",
data: function() {
return {
showTimer: true
}
},
components: { MyClock }
}
</script>
<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
button { padding: 0.5em 1.5em; margin: 20px 5px 0 0; }
</style>
