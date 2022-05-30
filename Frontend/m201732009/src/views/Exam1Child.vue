<template>
<<<<<<< HEAD
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
=======
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
>>>>>>> 7df85b300926472bac66d41a5a3a675cd4d0115e
