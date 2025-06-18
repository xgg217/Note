<template>
  <div>
    12
    <img src="~/assets/images/牛马.jpg" />
    <img :src="url" />
  </div>
</template>

<script setup lang="ts">
const url = new URL("~/assets/images/牛马.jpg", import.meta.url).href;
// const url = "~/assets/images/nm.jpg";
</script>

<style lang="scss" scoped></style>
