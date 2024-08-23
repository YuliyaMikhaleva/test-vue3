<script setup>
import {onMounted, reactive, ref} from 'vue'
import Form from "../../components/_UiComponents/Form/Form.vue";
import CardList from "../../components/CardList/CardList.vue";
import {useStateStore} from "../../store/index.js";
const store = useStateStore();
let initialState = ref({
  title: '',
  price: '',
  description: '',
  image: null,
})

const editedItem = ref(null)
const clearForm = () => {
  initialState.value = {
    title: '',
    price: '',
    description: '',
    image: null,
  };
  editedItem.value = null
}


const addItem = (item) => {
  if (!editedItem.value) {
    store.addProduct(item)
  } else {
    store.updateProduct(item)
    editedItem.value = null;
  }

}
const removeItem = (item) => {
  store.removeProduct(item)
}

const editItem = (item) => {
  editedItem.value = item;
  initialState.value = {
    ...item,
  };
}

onMounted(() => {
  store.getProducts();
})

</script>

<template>
  <section class="main-page">
    <div class="main-page__container">
      <div class="main-page__form-container">
        <Form class="main-page__form" @add-item="addItem" @clear-form="clearForm" :initial-state="initialState" :edit="!!editedItem" />
      </div>
      <CardList :list="store.getList" class="main-page__card-list" @remove-item="removeItem" @edit-item="editItem" />
    </div>
  </section>

</template>

<style lang="scss" src="./MainPage.scss" scoped />
