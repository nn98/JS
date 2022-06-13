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
        <td class="date"></td>
      </tr>
      <tr
        v-for="product in productList"
        v-bind:key="product.id"
      >
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.price * product.quantity }}</td>
        <td><button type="button" value={{product.id}} @click="remove(product.id)">삭제</button></td>
      </tr>
    </table>
    
    <div>
        <input
      type="text"
      v-model.trim="product.title"
      placeholder="제품명"
    />
    <input
      type="text"
      v-model.trim="product.price"
      placeholder="가격"
    />
    <input
      type="text"
      v-model.trim="product.quantity"
      placeholder="수량"
    />
      <button type="button" @click="save">추가</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "productListView",
  data() {
    return {
      productList: [],
      product: {},
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    save() {
        axios
          .post("http://localhost:8088/server/product/add", this.product).then(()=> (this.product={}))
          .then(() => this.reload())
          .catch((error) => this.onError(error));
    },
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
    remove(id) {
        if (confirm("삭제하시겠습니까?")) {
      axios
        .delete("http://localhost:8088/server/product/delete?idlist=" + id)
          .then(() => this.reload())
        .catch((error) => this.onError(error));
        }else {
            alert("취소되었습니다.")
        }
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
}

input[type="text"],
input[type="date"] {
  padding: 6px;
  font-size: 12pt;
}
input[type="text"] {
  width: 20%;
  margin: 0px 10px 10px 0px;
}
</style>
