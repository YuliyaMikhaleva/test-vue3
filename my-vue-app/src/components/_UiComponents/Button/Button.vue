<template>
  <button ref="btnRef" class="button" :class="classes">
    <slot />
    <EditSvg v-if="circle && action === 'edit'" />
    <BuySvg v-if="circle && action === 'buy'" />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import {onMounted, ref} from 'vue';
import EditSvg from 'icons/editIcon.svg';
import BuySvg from 'icons/buyIcon.svg';
const btnRef = ref()

const classes = computed(() => ({
  'button--circle':props.circle,
  'button--disabled':props.disabled,
  'button--cancel':props.cancel,
}));


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
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  cancel: {
    type: Boolean,
    default: false,
    required: false,
  }
})

onMounted(() => {
  // console.log('mounted Button')
});

</script>

<style lang="scss" src="./Button.scss" scoped/>
