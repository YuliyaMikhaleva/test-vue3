<script setup>
import { ref } from 'vue'
import Form from "../../components/_UiComponents/Form/Form.vue";
import CardList from "../../components/CardList/CardList.vue";

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <section class="main-page">
    <div class="main-page__container">

      <div class="main-page__form-container">
        <Form class="main-page__form"/>
      </div>
      <CardList class="main-page__card-list" />
    </div>
  </section>

</template>

<style lang="scss" src="./MainPage.scss" scoped />
