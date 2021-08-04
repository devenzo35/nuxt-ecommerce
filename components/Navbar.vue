<template>
  <nav
    class="
      bg-gray-200
      w-full
      h-13
      flex
      justify-between
      items-center
      p-3
      text-sm
    "
  >
    <NuxtLink to="/" class="w-full h-auto">
      <img src="~assets/logo.svg" alt="brand logo" />
    </NuxtLink>
    <div class="flex list-none gap-7">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/cart">Cart</NuxtLink>
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
