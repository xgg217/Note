<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>

<style lang="scss" scoped></style>
