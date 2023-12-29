<template>
  <NavbarMenu></NavbarMenu>
  <div class="card-block">
  <ItemForPage v-for="product in products" :key="product.id" :item="product"/>
</div>


</template>

<script >

import {ALL_PRODUCTS} from "@/assets/data_base";
import ItemForPage from "@/components/item-component/ItemForPage.vue";
import NavbarMenu from "@/components/navbar-menu-component/NavbarComponent.vue";


export default {
  name:"AllProductsPage",
  components: {NavbarMenu, ItemForPage},
  data(){
    return{
      products: ALL_PRODUCTS
    }
  }
}
</script>

<style >
.card-block{
  max-width: 1300PX;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  list-style-type: none;
}
@media (max-width: 1000px){
  .card-block{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1400px){
  .card-block{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

