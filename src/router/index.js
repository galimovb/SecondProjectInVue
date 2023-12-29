import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'all_products',
      component: () => import('@/pages/all-product-page/AllProductsPage.vue')
    },
    {
      path: '/women-cloth',
      name: 'women-cloth',
      component: () => import('@/pages/cloth-product-page/ClothPage.vue')
    },
    {
      path: '/product/:id',
      name: 'about-product',
      component: () => import('@/pages/product-info-pages/AboutProductsPage.vue')
    },
    {
      path: '/card',
      name: 'card-pages',
      component: () => import('@/pages/cart-page/CardPage.vue')
    },
    {
      path: '/electronic',
      name: 'electronic-pages',
      component: () => import('@/pages/electronics-page/ElectronicProductPage.vue')
    },
    {
      path: '/jewelry',
      name: 'jewelry-pages',
      component: () => import('@/pages/jewelry-page/JewelryProductPage.vue')
    }
  ]
})
export default router
