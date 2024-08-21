<script setup>
import { ref } from 'vue'
import Card from "../../components/_UiComponents/Card/Card.vue";
import CardList from "../../components/CardList/CardList.vue";
import Button from "../../components/_UiComponents/Button/Button.vue";
import Form from "../../components/_UiComponents/Form/Form.vue";

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
    <br>
    <Form />
    <br>
    <Button disabled>Добавить товар</Button>
    <br>
    <br>
    <Button>Добавить товар</Button>
    <br>
    <br>
    <Button cancel>Отменить редактирование</Button>
  </div>
</template>

<style lang="scss" src="./UiPage.scss" scoped />
