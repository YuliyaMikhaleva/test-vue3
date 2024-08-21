<template>
  <article class="card">
    <div class="card__actions">
      <Button circle action="edit" />
      <Button circle action="buy" />
    </div>
    <div class="card__image">
      <picture>
        <img v-if="image" :src="image" alt="">
        <img v-else src="images/previewImage.png" alt="">
      </picture>
    </div>
    <h5 class="card__title">{{ title }}</h5>
    <p class="card__text"><b>Описание: </b>{{ text }}</p>
    <div class="card__price"><b>{{ Number(price).toLocaleString() }} ₽</b></div>
  </article>
</template>

<script setup>
import { onMounted } from 'vue';
import Button from "../Button/Button.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  price: {
    type: Number || String,
    required: true,
  },
  image: {
    type: String,
    default: () => '',
  },
})

onMounted(() => {
  // console.log('mounted card')
});

</script>

<style lang="scss" src="./Card.scss" scoped/>
