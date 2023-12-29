<template>
  <div>
    <div class="card-container">
      <h2> Корзина</h2>
      <div v-if="cartProducts.length > 0">
        <div class="card-hint">
          <div class="card-hint-repeat"><strong>Фото</strong></div>
          <div class="card-hint-repeat"><strong>Название</strong></div>
          <div class="card-hint-repeat"><strong>Количество</strong></div>
          <div class="card-hint-repeat-price"><strong>Цена</strong></div>
        </div>
        <div v-for="product in cartProducts" :key="product.id" class="card-container-true">
          <div class="product-data">
            <div class="card-container-img">
              <img class="card-container-img-item" :src="product.img">
            </div>

              <div class="product-title">
                {{ product.name }}
              </div>
              <div class="product-count">
                <button class="product-count-btn" @click="decrementProductCount(product)">&#8722;</button>
                {{ product.number }}
                <button class="product-count-btn" @click="incrementProductCount(product)">&#43;</button>
              </div>
              <div class="product-price">
                {{ product.price }}&#8381;
                <div class="product-delete">
                  <button @click="removeProductFromCart(product)">
                    &#128465;
                  </button>
                </div>
              </div>

          </div>
        </div>
        <div class="all-data">
          <p><strong>Общее количество товаров</strong> : {{ productCount }} шт.</p>
          <p><strong>Общая сумма</strong> : {{ totalSum }}&#8381;</p>
        </div>
      </div>
      <div v-else class="card-container-false">
        <p><i>В корзине пока нет товаров</i></p>
        <p>Товары можно найти  <router-link to="/">здесь</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getFromLocalStorage, saveToLocalStorage } from "@/assets/LocalStorage";

export default {
  name: "CartPage",
  data() {
    return {
      cartProducts: [],
      totalSum: 0,
      productCount: 0
    };
  },
  methods: {
    calculateTotal() {
      let sum = 0;
      let count = 0;
      for (const product of this.cartProducts) {
        sum += product.price * product.number;
        count += product.number;
      }
      this.totalSum = sum;
      this.productCount = count;
    },
    updateLocalStorage() {
      const cartData = {};
      this.cartProducts.forEach((product) => {
        cartData[product.id] = product;
      });
          console.log(cartData)
      saveToLocalStorage("cart", cartData);
    },
    incrementProductCount(product) {
      if (product.number < 10){
        product.number += 1;
        this.calculateTotal();
        this.updateLocalStorage();
      }
    },
    decrementProductCount(product) {
      if (product.number > 1) {
        product.number -= 1;
        this.calculateTotal();
        this.updateLocalStorage();
      }
    },
    removeProductFromCart(product) {
      const index = this.cartProducts.indexOf(product);
      if (index !== -1) {
        this.cartProducts.splice(index, 1);
        this.calculateTotal();
        this.updateLocalStorage();
      }
    }
  },
  mounted() {
    const cart = getFromLocalStorage("cart");
    if (cart) {
      this.cartProducts = Object.values(cart);
      this.calculateTotal();
    }
  }
};
</script>

<style>
.card-container {
  width: 800px;
  margin: 90px auto;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  border-radius: 20px;
  padding: 20px;
}

.card-container-img-item {
  width: 40px;
  height: 50px;
}

.card-container-true {
  border-top: 2px solid #f6f6f6;
}

.product-data {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
  padding: 10px;
  align-items: center;
  gap:20px;
  margin-left: 30px;
}

.all-data {
  text-align: right;
}

.product-count button {
  padding: 5px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  width: 35px;
  height: 35px;
  font-size: 22px;
}

.product-delete button {
  padding: 5px;
  width: 100px;
  height: 35px;
  font-size: 16px;
  cursor: pointer;
}
.product-count{
  display: flex;
  gap:15px;
  align-items: center;
}

.product-delete button{
  border: none;
  box-shadow: none;
  background-color: white;
  padding: 0;
  font-size: 24px;

}
.product-price{
  display: flex;
  gap:15px;
  align-items: center;
}
.card-hint{
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.9fr 1.1fr;
  margin-bottom: 10px;
}
.card-hint-repeat{
  text-align: center;
}
.card-hint-repeat-price{
  text-align: center;
  margin-right: 50px;
}
.card-container h2{
  text-align: center;
  margin-bottom: 40px;
}
.card-container-false{
  margin: 30px auto;
  font-size:26px;
  text-align: center;
}
</style>
