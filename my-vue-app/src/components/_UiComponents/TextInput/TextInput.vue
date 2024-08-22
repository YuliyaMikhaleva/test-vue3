<template>
  <div class="text-input" :class="classes">
    <input
        type="text"
        :value="modelValue"
        @input="(e) => {
          $emit('update:modelValue',e.target.value);
          emit('drop-error')
        }"
    >
    <span class="text-input__placeholder">{{placeholder}}</span>
    <div v-if="errorText && isError" class="text-input__error">{{ errorText }}</div>
  </div>
</template>

<script setup>
import {computed, watch} from 'vue';
import {onMounted} from 'vue';

const classes = computed(() => ({
  'text-input--active':props.modelValue?.length>0,
  'text-input--error':props.isError,
  'text-input--success':props.isSuccess,

}));

const emit = defineEmits([
    'update:modelValue',
    'drop-error'
]);




const props = defineProps({
  modelValue: {
    type: String,
    default: () => '',
  },
  placeholder: {
    type: String,
    default: () => '',
    required: false,
  },
  isError: {
    type: Boolean,
    required: false,
  },
  isSuccess: {
    type: Boolean,
    required: false,
  },
  errorText: {
    type: String,
    default: () => '',
    required: false,
  },
})

onMounted(() => {
  // console.log('mounted Button')
});

</script>

<style lang="scss" src="./TextInput.scss" scoped/>
