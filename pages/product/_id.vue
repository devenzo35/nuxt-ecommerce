<template>
  <div class="bg-gray-100 border w-4/6 h-96 flex flex-col p-3 m-auto mt-16">
    <div class="bg-white border h-4/6 flex justify-center mx-auto py-5">
      <img :src="product.image[0].name" alt="product image" />
    </div>
    <h1 class="text-4xl font-bold my-8">{{ product.name }}</h1>
    <figcaption class="flex justify-between text-3xl">
      <span>${{ product.price }}</span>
      <span> stock: {{ product.stock }}</span>
    </figcaption>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $strapi, route }) {
    const id = route.params.id
    console.log(id)

    const product = await $strapi.$products.findOne(id)

    console.log(product)

    return {
      product,
    }
  },
})
</script>
