<template>
  <div class="text-input" :class="classes">
    <input
        type="text"
        :value="modelValue"
        @input="(e) => $emit('update:modelValue',e.target.value)"
    >
    <span class="text-input__placeholder">{{placeholder}}</span>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {onMounted} from 'vue';

const classes = computed(() => ({
  'text-input--active':props.modelValue?.length>0,
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
})

onMounted(() => {
  // console.log('mounted Button')
});

</script>

<style lang="scss" src="./TextInput.scss" scoped/>
