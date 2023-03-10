<template>
  <div class="home">
    <div v-for="item in $store.state.routes">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
    <button @click="loginout">登出</button>
  </div>
</template>

<script>
import Cookie from "js-cookie"
export default {
  name: 'home',
  created() {
  },
  methods: {
    loginout() {
      Cookie.remove("id");
      Cookie.remove("token");
      localStorage.removeItem("menu");
      this.$store.dispatch("resetRouter")
      this.$router.push("/login")
    }
  }
}
</script>
