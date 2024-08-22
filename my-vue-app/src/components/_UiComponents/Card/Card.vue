<template>
  <article class="card">
    <div class="card__actions">
      <Button circle action="edit" @click="emit('edit-item')" />
      <Button circle action="buy" @click="emit('remove-item')" />
    </div>
    <div class="card__image">
      <picture>
        <img v-if="image" :src="typeof image === 'string' ? image : file" alt="">
        <img v-else src="images/previewImage.png" alt="">
      </picture>
    </div>
    <h5 class="card__title">{{ title }}</h5>
    <p class="card__text">
      <b>Описание: </b>
      <span>{{ text }}</span>
    </p>
    <div class="card__price"><b>{{ Number(price).toLocaleString() }} ₽</b></div>
  </article>
</template>

<script setup>
import {computed, onMounted} from 'vue';
import Button from "../Button/Button.vue";

const props = defineProps({
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
    type: [String || Object],
    default: () => '',
  },
})
const emit = defineEmits([ 'remove-item', 'edit-item' ]);
const file = computed(() => {
  console.log('props.image', props.image)
  console.log('url', window.URL.createObjectURL(new Blob([props.image])));
  return window.URL.createObjectURL(new Blob([props.image]))
})
onMounted(() => {
  // console.log('mounted card', URL.createObjectURL(props.image))
});

</script>

<style lang="scss" src="./Card.scss" scoped/>
