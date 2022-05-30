<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>

export default {
  name: 'Exam1Child',
  props: [ 'msg' ]
}
</script>

<style scoped>
  div { 
    font-size: 18pt; padding: 5px; margin: 0 auto; 
    background-color: #dfd;
  }
</style>
