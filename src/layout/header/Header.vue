<template>
  <div class="navigation">
    <div class="header-logo">
      b-shop
    </div>
    <div class="navigation-menu">
      <router-link to="/card" class="navigation-menu-item">&#129530;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-layout'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: Open Sans,Helvetica,Arial,sans-serif;
}
.header-logo{
  font-family: Broadway, sans-serif;
  color: #14ff26;
  font-size:56px;
  position: relative;
  left: 20px;

}
.navigation-menu{
  display: flex;
  align-items: center;
  position: relative;
  right: 10px;
  justify-self: end;
  gap:25px;
}
.navigation{
  display: grid;
  max-width: 1410px;
  margin: 10px auto;
  grid-template-columns: 1fr 1fr ;
  gap:20px;
}

.navigation-menu-item{
  text-decoration: none;
  color: #5ec343;
  font-size: 28px;
}
.navigation-menu-item:hover{
  text-decoration: none;
  background-color: #5ec343;
  font-size: 28px;
}

</style>
