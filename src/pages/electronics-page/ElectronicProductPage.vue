<template>
  <NavbarMenu></NavbarMenu>
  <div class="card-blockkk">
    <ItemForPage v-for="product in products" :key="product.id" :item="product"/>
  </div>


</template>

<script >


import ItemForPage from "@/components/item-component/ItemForPage.vue";
import NavbarMenu from "@/components/navbar-menu-component/NavbarComponent.vue";
import {ELECTRONIC_PRODUCTS} from "@/assets/data_base";


export default {
  name:"ElectronicProductPage",
  components: {NavbarMenu, ItemForPage},
  data(){
    return{
      products: ELECTRONIC_PRODUCTS
    }
  }
}
</script>

<style >
.card-blockkk{
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

