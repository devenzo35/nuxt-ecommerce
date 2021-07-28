<template lang="">
  <div class="grid place-items-center min-h-screen">
    <form
      @submit="registerUser"
      class="grid place-items-center w-3/6 h-3/6 border"
    >
      <h1>Sign up to buy all the things you always wish</h1>
      <input
        v-model="username"
        type="text"
        name="username"
        class="w-4/6 h-10 border-2 rounded-sm p-1"
        placeholder="username"
      />
      <input
        v-model="email"
        type="email"
        name="email"
        class="w-4/6 h-10 border-2 rounded-sm p-1"
        placeholder="email"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        class="w-4/6 h-10 border-2 rounded-sm p-1"
        placeholder="password"
      />
      <button
        type="submit"
        class="bg-green-600 w-2/6 h-10 rounded-md text-white font-bold"
      >
        Start buying
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'register',
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async registerUser(e) {
      e.preventDefault()
      const newUser = this.$strapi.register({
        email: this.email,
        username: this.username,
        password: this.password,
      })

      console.log(newUser)
    },
  },
})
</script>
<style lang=""></style>
