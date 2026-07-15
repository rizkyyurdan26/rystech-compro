<template>
  <div
    class="flex flex-col items-center border border-title/30 hover:border-title transform duration-500 bg-card-hero p-6 rounded-xl"
  >
    <Icon :icon="icon" width="48" class="text-white" />
    <h1 class="text-text font-semibold text-xl mt-3">{{ title }}</h1>

    <ul
      class="mt-5 ml-5 self-start list-disc list-inside marker:text-title marker:text-xl text-text/80"
    >
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>

    <div class="py-1 bg-gradient-to-r from w-full mt-5"></div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  icon: String,
  title: String,
  data: {
    type: Object,
    default: () => {},
  },
});
</script>
