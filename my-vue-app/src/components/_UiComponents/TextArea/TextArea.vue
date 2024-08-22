<template>
  <div class="text-area" :class="classes">
    <textarea :value="modelValue" @input="(e) => $emit('update:modelValue',e.target.value)" />
    <div class="text-area__placeholder">
      <span v-if="placeholder">
        {{ placeholder }}
      </span>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted} from 'vue';

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

const classes = computed(() => ({
  'text-area--active':props.modelValue?.length>0,
}));

onMounted(() => {

});

</script>

<style lang="scss" src="./TextArea.scss" scoped/>
