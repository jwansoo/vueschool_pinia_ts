<template>
  <header
  class="flex justify-between p-6 mg-10 items-center"
  style="background-image: url('/images/double-bubble-outline.png')"
  >
  <h1 class="text-4xl text-gray-700 font-bold">The Pineapple Stand</h1>
  
  <div>
    <span class="mr-5">{{authUserStore.username}}</span>
    <CartWidget class="inline-block"/>  
  </div>
</header>
</template>

<script setup lang="ts">
import CartWidget from './CartWidget.vue';
import { useAuthUserStore } from '@/stores/AuthUserStore';
const authUserStore=useAuthUserStore()
</script>

<style scoped>

</style>