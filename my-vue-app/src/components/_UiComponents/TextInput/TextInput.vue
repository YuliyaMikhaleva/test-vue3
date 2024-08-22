<template>
  <div class="text-input" :class="classes">
    <input
        type="text"
        :value="modelValue"
        @input="(e) => $emit('update:modelValue',e.target.value)"
    >
    <span class="text-input__placeholder">{{placeholder}}</span>
    <div v-if="errorText && isError" class="text-input__error">{{ errorText }}</div>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {onMounted} from 'vue';

const classes = computed(() => ({
  'text-input--active':props.modelValue?.length>0,
  'text-input--error':props.isError,
  'text-input--success':props.isSuccess,

}));

defineEmits([
    'update:modelValue'
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
    default: false,
  },
  isSuccess: {
    type: Boolean,
    default: false,
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
