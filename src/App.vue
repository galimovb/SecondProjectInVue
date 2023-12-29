<template>
  <div class="app">
    <header-layout></header-layout>
    <router-view></router-view>
    <footer></footer>
  </div>

</template>

<script>


import HeaderLayout from "@/layout/header/Header.vue";

export default {
  name: 'App',
  components: {
    HeaderLayout,


  }
}
</script>

<style>
app{
  max-width: 100%;
}
</style>
