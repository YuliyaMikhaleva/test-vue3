<script setup>
import {computed, onMounted, reactive, ref, watch, watchEffect} from 'vue';
import Button from "../Button/Button.vue";
import TextInput from "../TextInput/TextInput.vue";
import TextArea from "../TextArea/TextArea.vue";
import FileInput from "../FileInput/FileInput.vue";
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { numbers } from 'helpers/validation';
const props = defineProps({
  circle: {
    type: Boolean,
    default: false,
    required: false,
  },
  action: {
    type: String,
    required: false,
  },
  initialState: {
    type: Object,
    default:() => ({})
  },
  edit: {
    type: Boolean,
    default: false,
    required: false,
  }
})

const productData = ref({
  ...props.initialState
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
const emit = defineEmits([ 'add-item', 'clear-form' ]);
const v$ = useVuelidate(formRules, productData);


watch(productData, (newData, oldPhoto) => {
  console.log('productData', productData.value)
}, { deep: true })

watchEffect(() => {
  if (props.initialState) {
    productData.value = props.initialState
  }
})

// // Функция для получения чистого объекта
// const getPlainObject = () => {
//   return JSON.parse(JSON.stringify(productData.value));
// };

const disabledButton = computed(() => {
  return (productData.value.title) ? false : true
});
const cancelButton = computed(() => {
  return (v$.value.$error) ? true : false
});
const clearForm = () => {
  productData.value = {
    ...props.initialState
  };
  v$.value.$reset();

}

const submitHandler = () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    alert('отправка');
    emit('add-item', productData.value);

    clearForm();
    emit('clear-form')
  }
}


onMounted(() => {
  console.log('props', props)
});

</script>
<template>
  <form class="form" @submit.prevent="submitHandler">
    <h2 class="form__title">{{ edit ? 'Редактирование' : 'Добавление'}} товара</h2>
    <p class="form__text">Заполните все обязательные поля с *</p>
    <TextInput class="form__input" placeholder="Название*" v-model="productData.title" :is-error="v$.title.$error" :is-success="v$.title.$dirty && !v$.title.$invalid" error-text="Обязательное поле для заполнения"   @drop-error="v$.title.$reset()"  />
    <TextInput class="form__input" placeholder="Цена*" v-model="productData.price" :is-error="v$.price.$error" :is-success="v$.price.$dirty &&  !v$.price.$invalid" error-text="Обязательное поле для заполнения: только цифры"  @drop-error="v$.price.$reset()"/>
    <FileInput class="form__input" placeholder="Фото" v-model="productData.image" :edit="edit" @remove-file="productData.image = null"/>
<!--    <pre>{{ // getPlainObject() }}</pre> &lt;!&ndash; Вызов метода для отображения чистого объекта &ndash;&gt;-->
    <TextArea class="form__input" placeholder="Описание товара" v-model="productData.description"/>
    <Button class="form__button" :disabled="disabledButton" :cancel="cancelButton">{{ edit ? 'Редактировать товар' : 'Добавить товар' }}</Button>
    <Button @click="emit('clear-form')" v-if="edit" cancel>Отменить редактирование</Button>
  </form>
</template>

<style lang="scss" src="./Form.scss" scoped/>
