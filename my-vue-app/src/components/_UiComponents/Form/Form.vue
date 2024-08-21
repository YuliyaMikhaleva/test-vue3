<template>
  <form class="form">
    <h2 class="form__title">Добавление товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <div>Контент</div>
  </form>
</template>

<script setup>
import {onMounted, ref} from 'vue';

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
