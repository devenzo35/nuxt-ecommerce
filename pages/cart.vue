<template lang="">
  <div>
    <li
      v-for="product in products"
      class="border-4 text-xs flex justify-between items-center w-full"
    >
      <img :src="product.image[0].name" :alt="product.name" class="w-20 h-20" />
      <section class="flex flex-col gap-1">
        <h1 class="font-bold uppercase">{{ product.name }}</h1>
        <h2>price: ${{ product.price }}</h2>
        <h3>quantity: {{ product.amount }}</h3>
      </section>
      <button @click="remove(product)">Remove</button>
    </li>
  </div>
</template>
<script>
export default {
  name: 'cart',
  data() {
    return {
      product: Object,
    }
  },
  methods: {
    async remove(product) {
      this.$strapi.delete('carts', product.id)
    },
  },
  async asyncData({ $strapi }) {
    const products = await $strapi.$carts.find()

    return {
      products,
    }
  },
}
</script>
<style lang=""></style>
