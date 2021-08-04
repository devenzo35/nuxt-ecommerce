<template>
  <div
    class="
      bg-gray-300
      border
      w-5/6
      flex flex-col
      justify-start
      p-3
      m-auto
      mt-11
      shadow-md
    "
  >
    <div class="border w-full h-min">
      <div class="aspect-w-16 aspect-h-9">
        <img
          :src="product.image[0].name"
          alt="product image"
          class="object-cover"
        />
      </div>
    </div>
    <section class="flex flex-col gap-6 justify-between">
      <h1 class="text-2xl font-bold my-2">{{ product.name }}</h1>
      <div>
        <input
          type="number"
          name="amount"
          value="1"
          class="px-3 w-full rounded-sm text-md"
          v-model="amount"
          :min="1"
          :max="product.stock"
        />
        <button
          @click="addToCart"
          class="text-sm bg-yellow-600 p-1 rounded-md mx-auto"
        >
          Add to cart
        </button>
      </div>
      <figcaption class="flex items-center justify-between text-2xl">
        <span>${{ price }}</span>
        <span class="bg-red-300 p-1 rounded-sm">
          stock: {{ product.stock }}</span
        >
      </figcaption>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 1,
      price: 0,
    }
  },
  async asyncData({ $strapi, route }) {
    const id = route.params.id

    const product = await $strapi.$products.findOne(id)

    return {
      product,
    }
  },
  mounted() {
    return (this.price = this.product.price)
  },
  methods: {
    async addToCart() {
      await this.$strapi.create('carts', {
        name: this.product.name,
        price: this.price,
        image: this.product.image,
        amount: this.product.amount,
      })
    },
  },
  watch: {
    amount: function (e) {
      if (e === '') {
        this.product.amount = 1
        return (this.price = this.product.price)
      }
      this.product.amount = e
      this.price = e * this.product.price
    },
  },
}
</script>
