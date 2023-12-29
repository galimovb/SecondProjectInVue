<template>
  <div class="catalog-menu">
    <div class="catalog-text">
      Catalog
    </div>
    <div class="catalog-button">
      <div class="catalog-button-item" :class="{ active: $route.path === '/' }">
        <router-link class="catalog-button-item-link" to="/">Все</router-link>
      </div>
      <div class="catalog-button-item" :class="{ active: $route.path === '/women-cloth' }">
        <router-link class="catalog-button-item-link" to="/women-cloth">Одежда</router-link>
      </div>
      <div class="catalog-button-item" :class="{ active: $route.path === '/electronic' }">
        <router-link class="catalog-button-item-link" to="/electronic">Электроника</router-link>
      </div>
      <div class="catalog-button-item" :class="{ active: $route.path === '/jewelry' }">
        <router-link class="catalog-button-item-link" to="/jewelry">Украшения</router-link>
      </div>
    </div>
  </div>
  <hr class="catalog-menu-line">
</template>

<script >
export default {
  name: "NavbarMenu"
}
</script>

<style >
body{

  font-family: "Roboto Light", sans-serif;
}
.catalog-menu{
  max-width: 1300px;
  margin:  auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top:40px;

}
.catalog-text{
  justify-self: start;
  font-size: 36px;
}
.catalog-button{
  justify-self: end;
  display: flex;
  gap:15px;
  align-items: center;
}
.catalog-button-item-link{
  text-decoration: none;
  color:grey;
  font-size: 24px;
  font-family: "Open Sans",sans-serif;
}
.catalog-menu-line{
  max-width: 1300px;
  border-top: 2px solid #f6f6f6;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
.router-link-active{
  color: white;
  padding: 5px;
  background-color: #5ec343;
  border-radius: 5px;

}
</style>
