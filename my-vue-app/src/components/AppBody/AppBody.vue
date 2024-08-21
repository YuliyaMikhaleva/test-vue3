<template>
  <main class="app-body">
    <router-view />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('mounted')
});

</script>

<style lang="scss" src="./AppBody.scss" scoped/>
