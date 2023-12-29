<template>
  <div class="product-info-global">
      <div class="product-info">
        <div class="product-info_img-block">
          <img class="product-info_img" :src="product_data.img">
        </div>

        <div class="product-info_text">
          <div class="product-info_text-name">
            <h1 style="text-align: left">{{product_data.name}}</h1>
            <hr class="catalog-menu-line">
          </div>

          <div class="product-info_text-rating-block">
            <div class="product-info_text-rating">
              <img class="product-info_text-rating-img" src="/img/star.png">
            </div>
            <div>{{product_data.rating}}</div>
          </div>

          <h1 class="product-info_text-price">
            {{product_data.price}}&#8381;
          </h1>
          <div class="add-to-cart">
            <div class="add-to-cart-form">
              <button class="add-to-cart-btn" @click="minus">-</button>
              <div>{{number}}</div>
              <button class="add-to-cart-btn" @click="plus">+</button>
            </div>
            <button class="product-info_form-add-to-cart" @click="addToCart">
              {{ isAddedToCart ? 'Добавлено в корзину' : 'Добавить в корзину' }}
            </button>
          </div>
          <div class="product-info_text-description">
            <h1>Описание</h1>
            {{product_data.description}}
          </div>
        </div>
      </div>
  </div>
</template>

<script >
import {ALL_PRODUCTS} from "@/assets/data_base";
import {getFromLocalStorage, saveToLocalStorage} from "@/assets/LocalStorage";

export default {
  name:"About-Products",
  data(){
    return{
      product:'',
      product_data:'',
      number:1,
      isAddedToCart:false

    }
  },
  methods:{
    minus(){
        if(this.number>1){
          this.number--;
        }
    },
    plus(){
      if(this.number<10){
        this.number++;
      }
    },
    addToCart(){
      const productData={
        id:this.product_data.id,
        name:this.product_data.name,
        img:this.product_data.img,
        number:this.number,
        price:this.product_data.price
      }
      const currentCart = getFromLocalStorage("cart") || {};
      currentCart[this.product_data.id]=productData
      saveToLocalStorage("cart",currentCart)
      this.isAddedToCart=true;

    }
  },
  mounted() {
    const productId=parseInt(this.$route.params.id);

    ALL_PRODUCTS.forEach((item)=>{
      if(item.id===productId){
        this.product=item;
        this.product_data={
          id:this.product.id,
          name:this.product.name,
          img:this.product.img,
          price:this.product.price,
          rating:this.product.rating,
          description:this.product.description
        }
      }
    })
  }
}
</script>


<style >
.product-info-global{
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  margin: 60px auto;
  height: 620px;
  width: 1250px;
  padding: 20px;
  border-radius: 10px;
}
.product-info{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:20px;
}
.product-info_img{
  width:450px;
  height: 550px;
  padding: 20px;
}
.product-info_img-block{
  align-items: center;
  justify-self: center;
}
.product-info_text-name{
  font-size: 22px;
  line-height: 50px;
  font-family: Nunito sans-serif;
}
.product-info_text-rating-block{
  display: flex;
  gap:10px;
  margin-top: 20px;
  align-items: center;
}
.product-info_text-rating-img{
  width: 20px;
  height:20px;
  background-color:white ;
}
.catalog-menu-line{
  max-width: 100%;
  border-top: 2px solid #f6f6f6;
  margin:  0 10px 0 10px;
}
.add-to-cart-btn{
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  width: 35px;
  height: 35px;
  font-size: 22px;

}
.add-to-cart-form{
  display: flex;
  align-items: center;
  gap:10px
}
.add-to-cart{
  display: flex;
  gap:30px
}
.product-info_form-add-to-cart{
  border: none;
  background-color: #5ec343;
  color: white;
  border-radius: 5px;
  height: 50px;
  font-size: 18px;
}
.product-info_form-add-to-cart:hover{
  background-color:#5ec370;
}
.product-info_text-description{
  text-align: left;
  font-family: "Roboto Light", sans-serif;
  margin-bottom: 10px;
}
</style>
