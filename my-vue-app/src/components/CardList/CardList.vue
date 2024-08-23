<template>
  <div class="card-list">
    <Card class="card-list__card" v-if="arrayCards.length>0" v-for="(card, k) in arrayCards" :title="card.title" :text="card.description" :price="card.price" :image="card.image" :key="k" @remove-item="emit('remove-item', card)" @edit-item="emit('edit-item', card)" />
    <h1 v-else class="card-list__note">
      <TimeIcon />
      <span>В данный момент товары отсутствуют</span>
    </h1>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive} from 'vue';
import Card from "../_UiComponents/Card/Card.vue";
import TimeIcon from 'icons/timeIcon.svg';
const emit = defineEmits([ 'remove-item', 'edit-item' ]);
const props = defineProps({
  list: {
    type: Array,
    default: [],
    required: true,
  },
})
const arrayCards = computed(() => props.list)

onMounted(() => {
  console.log('mounted card-list')
});

</script>

<style lang="scss" src="./CardList.scss" scoped/>
