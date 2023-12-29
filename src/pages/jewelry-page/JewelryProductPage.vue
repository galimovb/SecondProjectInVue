<template>
  <NavbarMenu></NavbarMenu>
  <div class="card-blocke">
    <ItemForPage v-for="product in products" :key="product.id" :item="product"/>
  </div>


</template>

<script >


import ItemForPage from "@/components/item-component/ItemForPage.vue";
import NavbarMenu from "@/components/navbar-menu-component/NavbarComponent.vue";
import {JEWELRY_PRODUCT} from "@/assets/data_base";



export default {
  name:"JewelryProductPage",
  components: {NavbarMenu, ItemForPage},
  data(){
    return{
      products: JEWELRY_PRODUCT
    }
  }
}
</script>

<style >
.card-blocke{
  max-width: 1300PX;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  list-style-type: none;
  padding-left: 15px;
}
@media (max-width: 1000px){
  .card-blocke{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1400px){
  .card-blocke{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

