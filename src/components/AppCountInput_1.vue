<template>
  <span>
    <button
    class="cursor-pointer bg-gray-200 px-2 rounded-1"
    @click="updateValue(modelValue >0 ? modelValue-1 :0)"
    >-</button>
    <input 
    :value="modelValue"
    type="number"
    min="0"
    @input="updateValue(modelValue)" />
    <button 
    class="bg-gray-200 px-2 rounded-r cursor-pointer"
    @click="updateValue(modelValue+1)"
    >+</button>
  </span>
</template>

<script setup lang="ts">

defineProps<{
  modelValue:number
}>()
//const emit=defineEmits(['update:modelValue','input'])
const emit=defineEmits<{
  (e:'update:modelValue',value:number):void,
  
}>()
const updateValue=(value:number)=>emit('update:modelValue',value)
</script>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-gray-500 w-10 text-center;
}
button {
  border: 1px solid gray;
}
</style>