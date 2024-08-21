<template>
  <form class="form">
    <h2 class="form__title">Добавление товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <div>Контент</div>
    <Button disabled>Добавить товар</Button>
  </form>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import Button from "../Button/Button.vue";

const props = defineProps({
  circle: {
    type: Boolean,
    default: false,
    required: false,
  },
  action: {
    type: String,
    required: false,
  }
})

onMounted(() => {

});

</script>

<style lang="scss" src="./Form.scss" scoped/>
