<template lang="">
  <div class="grid place-items-center min-h-screen">
    <form
      @submit="loginUser"
      class="grid place-items-center w-3/6 h-3/6 border"
    >
      <h1>Sign up to buy all the things you always wish</h1>
      <p v-if="$strapi.user">Logged in</p>
      <input
        v-model="username"
        type="text"
        name="username"
        class="w-4/6 h-10 border-2 rounded-sm p-1"
        placeholder="username"
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
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()

      try {
        const user = await this.$strapi.login({
          identifier: this.username,
          password: this.password,
        })

        if (user !== null) {
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>
<style lang=""></style>
