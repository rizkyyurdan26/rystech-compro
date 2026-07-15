<template>
  <div class="min-h-dvh flex flex-col">
    <Header />
    <main class="flex-1">
      <HeroSection />
      <Layanan />
    </main>
  </div>
</template>

<script setup>
import Header from "./views/Header.vue";
import HeroSection from "./views/HeroSection.vue";
import Layanan from "./views/Layanan.vue";
</script>
