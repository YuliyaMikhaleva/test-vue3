<template>
  <div class="card-list">
    <Card v-for="(card, k) in list" :title="card.title" :text="card.text" :price="card.price" :key="k" />
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import Card from "../_UiComponents/Card/Card.vue";
const list = reactive([
  {
    title: 'Заголовок',
    text: 'Текст',
    price: 5000
  },
  {
    title: 'Заголовок',
    text: 'Текст',
    price: 5000
  },
  {
    title: 'Заголовок',
    text: 'Текст',
    price: 5000
  },
  {
    title: 'Заголовок',
    text: 'Текст',
    price: 5000
  },
  {
    title: 'Заголовок',
    text: 'Текст',
    price: 5000
  },
])

defineProps({

})

onMounted(() => {
  console.log('mounted card-list')
});

</script>

<style lang="scss" src="./CardList.scss" scoped/>
