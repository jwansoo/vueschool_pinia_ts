<template>
  <li class="card">
    <img :src="`/images/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} - <span class="text-green-500">${{product.price}}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton class="primary" @click="$emit('addToCart',count), (count=0)">Add to Cart</AppButton>
    </div>
  </li>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Product } from '@/types/Product';
import AppCountInput from './AppCountInput_1.vue';
import AppButton from './AppButton.vue';
const props=defineProps<{
  product:Product
}>()
const emit=defineEmits<{
  (e:'addToCart'):void
}>()
const count=ref(0)
</script>

<style scoped>

</style>