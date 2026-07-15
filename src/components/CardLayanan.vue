<template>
  <div class="flex flex-col md:flex-row w-full justify-around items-center lg:max-w-[70%] mx-auto gap-5" v-for="item in data" :key="item.id">

    <!-- Left -->
     <div class="flex flex-col gap-3 md:max-w-[50%]">
        <h1 class="text-text text-xl md:text-2xl font-bold ">{{ item.title }}</h1>
        <p class="text-text/70">{{item.description}}</p>

        <div class="flex gap-5 items-center " v-for="content in item.content" :key="content.id">
            <Icon icon="maki:arrow" class="text-title"/>
            <div>
                <h3 class="text-text font-bold">{{ content.title }}</h3>
                <p class="text-text/70 text-sm">{{ content.description }}</p>
            </div>
        </div>
     </div>

     <!-- Right -->
      <div class="md:max-w-[50%] p-15 bg-card-logo rounded-xl">
        <Icon :icon="item.icon" width="100" :class="[item.iconColor]"/>
      </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
    data: {
        type: Object,
        default: () => {}
    }
})
</script>
