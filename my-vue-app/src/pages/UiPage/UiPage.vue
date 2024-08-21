<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>ui page</h1>
</template>

<style lang="scss" src="./UiPage.scss" scoped />
