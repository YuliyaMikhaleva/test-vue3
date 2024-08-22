<template>
  <div class="file-input">
    <div v-if="selectedFile && selectedFile.file && selectedFile.file.name" class="file-input__label" @click.stop>
      <span class="file-input__placeholder file-input__placeholder--file">
        {{ selectedFile.file.name }}
      </span>
      <div class="file-input__icon file-input__icon--file" @click="selectedFile.file = null">
        <DeleteIcon />
      </div>
    </div>
    <label v-else class="file-input__label">
      <p class="file-input__placeholder">
        {{ placeholder }}
      </p>
      <input
          ref="file"
          type="file"
          @change="handleFileUpload($event)"
      >
      <div class="file-input__icon">
        <img src="../../../assets/icons/fileIcon.svg" alt="">
      </div>
    </label>
  </div>
</template>

<script setup>
import DeleteIcon from 'icons/deleteIcon.svg';
import {reactive, ref} from 'vue';
import {onMounted} from 'vue';
const file = ref(File | null)
const selectedFile = reactive({
  file: null
})
const emit = defineEmits([ 'update:modelValue' ]);

const handleFileUpload = ($event) => {
  const target = $event.target;
  if (target && target.files && selectedFile) {
    file.value = target.files[0];
    selectedFile.file = target.files[0];
  }
  emit('update:modelValue', file.value);
}

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
  if (props.modelValue) {
    selectedFile.file = {
      name: props.modelValue
    }
  }
});

</script>

<style lang="scss" src="./FileInput.scss" scoped/>
