<template>
  <div class="card-list">
    <Card class="card-list__card" v-if="list.length>0" v-for="(card, k) in list" :title="card.title" :text="card.text" :price="card.price" :key="k" />
    <h1 v-else class="card-list__note">
      <TimeIcon />
      В данный момент товары отсутствуют
    </h1>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import Card from "../_UiComponents/Card/Card.vue";
import TimeIcon from 'icons/timeIcon.svg';
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

onMounted(() => {
  console.log('mounted card-list')
});

</script>

<style lang="scss" src="./CardList.scss" scoped/>
