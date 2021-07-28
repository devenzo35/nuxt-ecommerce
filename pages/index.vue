<template>
  <div>
    <Navbar />

    <ul class="flex justify-evenly gap-10 px-6 mt-10">
      <figure
        :key="product.id"
        v-for="product in products"
        @click="goToProduct(product)"
        class="
          border
          rounded-sm
          p-3
          w-2/5
          h-68
          shadow-md
          hover:bg-blue-300
          cursor-pointer
          flex flex-col
          justify-between
        "
      >
        <img
          :src="product.image[0].name"
          alt="product image"
          class="w-full h-4/5"
        />
        <h2>{{ product.name }}</h2>
        <span>price: {{ product.price }} stock: {{ product.stock }}</span>
      </figure>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  data() {
    return {
      product: Object,
    }
  },
  components: {
    Navbar,
  },
  methods: {
    async goToProduct(product) {
      this.$nuxt.$router.push('/product/' + product.id)
    },
  },
  async asyncData({ $strapi }) {
    const products = await $strapi.$products.find()

    return {
      products,
    }
  },
})
</script>
