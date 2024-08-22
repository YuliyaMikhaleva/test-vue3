<script setup>
import {computed, onMounted, reactive, ref, watch, watchEffect} from 'vue';
import Button from "../Button/Button.vue";
import TextInput from "../TextInput/TextInput.vue";
import TextArea from "../TextArea/TextArea.vue";
import FileInput from "../FileInput/FileInput.vue";
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { numbers } from 'helpers/validation';

const productData = ref({
  name: '',
  price: '',
  text: '',
  photo: null,
})

const formRules = {
  name: {
    required,
    minLength:minLength(1),
  },
  price: {
    required,
    minLength:minLength(1),
    numbers,
  }
};

const v$ = useVuelidate(formRules, productData);

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
  v$.value.$touch();
}

onMounted(() => {

});

</script>
<template>
  <form class="form" @submit.prevent="handler">
    <h2 class="form__title">Добавление товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <TextInput class="form__input" placeholder="Название*" v-model="productData.name" :is-error="v$.name.$error" :is-success="v$.name.$dirty && !v$.name.$invalid" error-text="Обязательное поле для заполнения"/>
    <TextInput class="form__input" placeholder="Цена*" v-model="productData.price" :is-error="v$.price.$error" :is-success="v$.price.$dirty && !v$.price.$invalid" error-text="Обязательное поле для заполнения: только цифры"/>
    <FileInput class="form__input" placeholder="Фото" v-model="productData.photo" />
<!--    <pre>{{ // getPlainObject() }}</pre> &lt;!&ndash; Вызов метода для отображения чистого объекта &ndash;&gt;-->
    <TextArea class="form__input" placeholder="Описание товара" v-model="productData.text"/>
    <Button :disabled="disabledButton">Добавить товар</Button>
  </form>
</template>

<style lang="scss" src="./Form.scss" scoped/>
