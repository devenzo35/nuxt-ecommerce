<template>
  <div>
    <ul class="flex flex-col justify-evenly items-center gap-5 mt-10 mb-8">
      <figure
        :key="product.id"
        v-for="product in products"
        @click="goToProduct(product)"
        class="
          border
          rounded-sm
          p-3
          w-5/6
          h-68
          shadow-md
          bg-white
          lg:hover:bg-blue-300
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
        <span class="text-sm">price: ${{ product.price }}</span>
      </figure>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: Object,
    }
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
  mounted() {
    this.$store.commit('products/loadProducts', this.products)
  },
}
</script>
