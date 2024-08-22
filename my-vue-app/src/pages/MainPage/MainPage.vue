<script setup>
import {reactive, ref} from 'vue'
import Form from "../../components/_UiComponents/Form/Form.vue";
import CardList from "../../components/CardList/CardList.vue";

defineProps({
  msg: String,
})

const list = ref([
  {
    id:1,
    title: 'Заголовок',
    text: 'Текст',
    price: 5000,
    photo: null,
  },
  {
    id:2,
    title: 'Заголовок',
    text: 'Текст',
    price: 5000,
    photo: null,
  },
  {
    id:3,
    title: 'Заголовок',
    text: 'Текст',
    price: 5000,
    photo: null,
  },
])

let initialState = ref({
  title: '',
  price: '',
  text: '',
  photo: null,
})

const editedItem = ref(null)
const clearForm = () => {
  initialState.value = {
    title: '',
    price: '',
    text: '',
    photo: null,
  };
  editedItem.value = null
}


const addItem = (item) => {
  console.log('item', item)
  console.log('item', item)
  if (!editedItem.value) {
    console.log('initialState.value', initialState.value)
    list.value.push({
      id: list.value.length + 1,
      // photo: null,
      ...item
    })
  } else {

    let element = list.value.find(element => element.id === item.id);
    let index = list.value.indexOf(element);
    let arr = list.value.filter(el => el.id !== item.id);
    arr.splice(index, 0, {
      // photo:null,
      ...item
    })
    list.value = arr;
    editedItem.value = null;
  }

}
const removeItem = (item) => {
  list.value = list.value.filter(el => el !== item)
}

const editItem = (item) => {

  editedItem.value = item;
  initialState.value = {
    ...item,
    // photo: null,
  };
  // clearForm();
}

</script>

<template>
  <section class="main-page">
    <div class="main-page__container">
      <div class="main-page__form-container">
        <Form class="main-page__form" @add-item="addItem" @clear-form="clearForm" :initial-state="initialState" :edit="!!editedItem" />
      </div>
      <CardList :list="list" class="main-page__card-list" @remove-item="removeItem" @edit-item="editItem" />
    </div>
  </section>

</template>

<style lang="scss" src="./MainPage.scss" scoped />
