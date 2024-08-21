<script setup>
import { ref } from 'vue'
import Card from "../../components/_UiComponents/Card/Card.vue";

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <Card title="Заголовок" text="Текст" price="6000" />
  </div>
</template>

<style lang="scss" src="./UiPage.scss" scoped />
