<template>
    <div>{{ time }}</div>
</template>
<script>
import moment from "moment";
export default {
    name: "MyClock",
    data() {
        return { time: null };
    },
    mounted() {
        let callback = () => this.time = moment().format("yyyy-MM-dd HH-mm-ss.SSS");
        console.log(this.time);
        callback();
        setInterval(callback, 1);
    },
    beforeUnmount: function () {
        clearInterval(this.timerId);
    }

}
</script>
<style scoped>
div {
    display: inline-block;
    font-size: 15pt;
    padding: 3px 12px;
    border: 1px solid gray;
}
</style>
