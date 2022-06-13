<template>
  <div id="box">
    <h1>제품 목록</h1>
    <table>
      <tr>
        <td class="id">id</td>
        <td class="title">제품명</td>
        <td class="date">가격</td>
        <td class="title">수량</td>
        <td class="date">금액</td>
      </tr>
      <tr
        v-for="product in productList"
        v-bind:key="product.id"
        v-on:click="edit(product.id)"
      >
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.price*product.quantity }}</td>
      </tr>
    </table>
    <button type="button" v-on:click="add">등록</button>
    <button type="button" v-on:click="reload">새로고침</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "productListView",
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      axios
        .get("http://localhost:8088/server/product/list")
        .then((response) => (this.productList = response.data))
        .catch((error) => this.onError(error));
    },
    add() {
      this.$router.push("product");
    },
    edit(id) {
      this.$router.push({ name: "product", params: { id: id } });
    },
    onError: function (error) {
      console.log(error);
      alert(error.message);
    },
  },
};
</script>
<style scoped>
div#box {
  padding: 30px;
  margin: 30px auto;
  width: 600px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
  text-align: left;
}
h1 {
  border-bottom: 1px solid gray;
}
button {
  padding: 0.4em 1.4em;
  margin-right: 5px;
  font-size: 11pt;
}
table {
  border-collapse: collapse;
  margin-bottom: 20px;
}
tr:nth-child(1) {
  background-color: #ddd;
}
td {
  padding: 5px;
  border: 1px solid #aaa;
}
td.id {
  width: 70px;
}
td.title {
  width: 300px;
}
td.date {
  width: 100px;
}
tr:not(:nth-child(1)):hover {
  background-color: #ffa;
  cursor: pointer;
}
</style>
