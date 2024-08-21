<script setup>
import { ref } from 'vue'
import Card from "../../components/_UiComponents/Card/Card.vue";
import CardList from "../../components/CardList/CardList.vue";
import Button from "../../components/_UiComponents/Button/Button.vue";

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <Card title="Заголовок" text="Текст" price="6000" />
    <br>
    <CardList />
    <br>
    <Button circle action="edit" />
  </div>
</template>

<style lang="scss" src="./UiPage.scss" scoped />
