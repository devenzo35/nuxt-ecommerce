<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  component: () => import('../components/Navbar.vue'),
}
</script>
