<template lang="">
  <div class="grid place-items-center min-h-screen">
    <form
      @submit="loginUser"
      class="grid place-items-center w-5/6 h h-3/6 border"
    >
      <h1>Sign up to buy all the things you always wish</h1>
      <input
        v-model="username"
        type="text"
        name="username"
        class="w-5/6 h h-10 border-2 rounded-sm p-1"
        placeholder="username"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        class="w-5/6 h h-10 border-2 rounded-sm p-1"
        placeholder="password"
      />
      <button
        type="submit"
        class="bg-green-600 w-5/6 h-10 rounded-md text-white font-bold"
      >
        Start buying
      </button>
    </form>
    <button
      @click="forgotPassword"
      class="bg-red-600 w-5/6 h-10 rounded-md text-white font-bold"
    >
      Forgot password?
    </button>
  </div>
</template>
<script lang="js">
import Vue from 'vue'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()

      try {
        const user = await this.$strapi.login({
          identifier: this.username,
          password: this.password,
        })

        if (user) {
          this.$nuxt.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    },
    async forgotPassword() {
      console.log('hellooo')
      try {
        const reset = await this.$strapi.forgotPassword({email:'enzocuellar12@gmail.com'})
        console.log('reset')
    }catch(err){
      console.log(err)
    }
  },
  }
}
</script>
<style lang=""></style>
