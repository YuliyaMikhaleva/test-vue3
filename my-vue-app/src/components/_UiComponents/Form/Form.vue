<script setup>
import {onMounted, ref} from 'vue';
import Button from "../Button/Button.vue";
import TextInput from "../TextInput/TextInput.vue";
import TextArea from "../TextArea/TextArea.vue";
const name = ref('')
const price = ref('')
const photo = ref('')
const text = ref('')
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
<template>
  <form class="form">
    <h2 class="form__title">Добавление товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <TextInput class="form__input" placeholder="Название*" v-model="name"/>
    <TextInput class="form__input" placeholder="Цена*" v-model="price"/>
    <TextInput class="form__input" placeholder="Фото" v-model="photo"/>
    <TextArea class="form__input" placeholder="Описание товара" v-model="text"/>
    <Button disabled>Добавить товар</Button>
  </form>
</template>

<style lang="scss" src="./Form.scss" scoped/>
