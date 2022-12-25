<script setup lang="ts">
import AppCountInput from './AppCountInput.vue';
import type{Product} from '../types/Product'
defineProps<{
  product:Product,
  count: number
}>()
defineEmits<{
  (e:'updateCount'):void,
  (e:'clear'):void
  }>()
</script>
<template>
  <li>
    <span>{{ product.name }}</span>
    <span class="whitespace-nowrap">
      <AppCountInput
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event)"
      />
      <span class="inline-block w-12 text-right"
        >${{ count * product.price }}</span
      >
      <span class="ml-4" @click="$emit('clear')">
        <fa icon="trash-alt" />
      </span>
    </span>
  </li>
</template>