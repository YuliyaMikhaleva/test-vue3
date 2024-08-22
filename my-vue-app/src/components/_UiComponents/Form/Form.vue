<script setup>
import {computed, onMounted, reactive, ref, watch, watchEffect} from 'vue';
import Button from "../Button/Button.vue";
import TextInput from "../TextInput/TextInput.vue";
import TextArea from "../TextArea/TextArea.vue";
import FileInput from "../FileInput/FileInput.vue";
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { numbers } from 'helpers/validation';

const initialState = {
  title: '',
  price: '',
  text: '',
  photo: null,
}

const productData = ref({
  ...initialState
})

const formRules = {
  title: {
    required,
    minLength:minLength(1),
  },
  price: {
    required,
    minLength:minLength(1),
    numbers,
  }
};
const emit = defineEmits([ 'add-item' ]);
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

  return (productData.value.title) ? false : true
});

const clearForm = () => {
  productData.value = {
    ...initialState
  };
  v$.value.$reset();

}

const submitHandler = () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    alert('отправка');
    emit('add-item', productData.value);
    clearForm();
  }
}


onMounted(() => {

});

</script>
<template>
  <form class="form" @submit.prevent="submitHandler">
    <h2 class="form__title">Добавление товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <TextInput class="form__input" placeholder="Название*" v-model="productData.title" :is-error="v$.title.$error" :is-success="v$.title.$dirty && !v$.title.$invalid" error-text="Обязательное поле для заполнения"   @drop-error="v$.title.$reset()"  />
    <TextInput class="form__input" placeholder="Цена*" v-model="productData.price" :is-error="v$.price.$error" :is-success="v$.price.$dirty &&  !v$.price.$invalid" error-text="Обязательное поле для заполнения: только цифры"  @drop-error="v$.price.$reset()"/>
    <FileInput class="form__input" placeholder="Фото" v-model="productData.photo" />
<!--    <pre>{{ // getPlainObject() }}</pre> &lt;!&ndash; Вызов метода для отображения чистого объекта &ndash;&gt;-->
    <TextArea class="form__input" placeholder="Описание товара" v-model="productData.text"/>
    <Button :disabled="disabledButton">Добавить товар</Button>
  </form>
</template>

<style lang="scss" src="./Form.scss" scoped/>
