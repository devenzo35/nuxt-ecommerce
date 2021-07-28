<template>
  <nav
    class="
      bg-gray-800
      w-full
      h-20
      flex
      justify-between
      items-center
      p-1
      px-7
      text-white
    "
  >
    <!-- logo section and menu section navbar -->
    <div class="w-full h-auto">
      <img
        src="https://cdn.vuestorefront.io/static/images/logo.png"
        class="w-full h-auto"
        alt="Vue Storefront"
      />
    </div>
    <div class="flex list-none gap-7">
      <li>Home</li>
      <li>Cart</li>
    </div>

    <!-- <div class="ml-5 text-lg text-white">
      {{ $strapi.user.username }}
    </div> -->
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

/* 
  todo: import svg logo
 */
//import logo from '../static/logo.svg'
export default Vue.extend({
  name: 'Navbar',
})
</script>
