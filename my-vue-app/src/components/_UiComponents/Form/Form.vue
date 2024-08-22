<script setup>
import {computed, onMounted, reactive, ref, watch, watchEffect} from 'vue';
import Button from "../Button/Button.vue";
import TextInput from "../TextInput/TextInput.vue";
import TextArea from "../TextArea/TextArea.vue";
import FileInput from "../FileInput/FileInput.vue";

const productData = ref({
  name: '',
  price: '',
  text: '',
  photo: null,
})
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
watch(productData, (newData, oldPhoto) => {
  console.log('productData', productData.value)
}, { deep: true })

// // Функция для получения чистого объекта
// const getPlainObject = () => {
//   return JSON.parse(JSON.stringify(productData.value));
// };

const disabledButton = computed(() => {

  return (productData.value.name) ? false : true
});

const handler = () => {
  console.log('productData', productData.value)
}

onMounted(() => {

});

</script>
<template>
  <form class="form" @submit.prevent="handler">
    <h2 class="form__title">Добавление товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <TextInput class="form__input" placeholder="Название*" v-model="productData.name"/>
    <TextInput class="form__input" placeholder="Цена*" v-model="productData.price"/>
    <FileInput class="form__input" placeholder="Фото" v-model="productData.photo" />
<!--    <pre>{{ // getPlainObject() }}</pre> &lt;!&ndash; Вызов метода для отображения чистого объекта &ndash;&gt;-->
    <TextArea class="form__input" placeholder="Описание товара" v-model="productData.text"/>
    <Button :disabled="disabledButton">Добавить товар</Button>
  </form>
</template>

<style lang="scss" src="./Form.scss" scoped/>
