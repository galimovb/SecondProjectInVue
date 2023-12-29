<template>
  <div class="container_item" @click="redirect">
    <div class="favorite-icon" :class="{ 'favorite-icon-active': isFavorite }" @click.stop="toggleFavorite">
      <span class="heart-icon">{{ isFavorite ? '❤️' : '🤍' }}</span>
    </div>
    <div class="products-img">
      <img class="products-item-img" :src="item.img" alt="Product Image">
    </div>
    <hr class="item-line">
    <h3 class="item_name">{{ item.name }}</h3>
    <div class="product-info_text-rating-block">
      <div class="product-info_text-rating">
        <img class="product-info_text-rating-img" src="/img/star.png" alt="Rating Star">
      </div>
      <div>{{ item.rating }}</div>
    </div>
    <h4 class="price_item"> {{ item.price }}&#8381;</h4>
  </div>
</template>

<script>
export default {
  name: "ItemForPage",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    redirect() {
      this.$router.push(`/product/${this.item.id}`);
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style scoped>
.container_item {
  margin-top: 30px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  border-radius: 20px;
  max-height: 500px;
  max-width: 300px;
  margin-bottom: 30px;
}
.products-item-img {
  width: 250px;
  height: 250px;
}
.products-img {
  padding: 10px 25px 5px 25px;
}
.favorite-icon {
  position: relative;
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 1;
}
.favorite-icon-active .heart-icon {
  color: red;
}
.heart-icon {
  font-size: 20px;
}
.product-info_text-rating-block {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 10px;
  align-items: center;
}
.product-info_text-rating-img {
  width: 20px;
  height: 20px;
  background-color: white;
}
.price_item {
  margin-left: 15px;
  font-family: "Calisto MT",sans-serif;
  font-size: 22px;
}
.item_name {
  text-align: center;
}
.item-line {
  border-top: 2px solid #f6f6f6;
}
</style>
