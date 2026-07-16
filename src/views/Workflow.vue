<template>
  <section id="workflow" class="relative w-full bg-bgsecondary/80 py-20">
    <div
      class="flex flex-col w-[90%] md:max-w-6xl items-center justify-center mx-auto"
    >

    <!-- Content Title -->
      <div class="flex flex-col gap-3 items-center text-center">
        <h1 class="text-xl md:text-2xl text-text font-bold">
          Prosedur Kami Bekerja
        </h1>
        <p class="text-sm md:text-base text-white/70">
          Workflow sistematis, jelas, terpercaya, tepat waktu, dan hasil maksimal
        </p>
      </div>

      <!-- Card Content -->
       <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5 md:mt-10">
        <CardWorkflow :data="data"/>
       </div>
    </div>
  </section>
</template>

<script setup>
import CardWorkflow from '../components/CardWorkflow.vue';
import { dataWorkflow } from '../data/dataWorkflow.js';

const data = dataWorkflow

</script>
