<template>
    <div class="home">
        <router-link v-for="item in state.routes">{{ item.name }}</router-link>
    </div>
</template>
  
<script>
export default {
    name: 'page1'
}
</script>
  