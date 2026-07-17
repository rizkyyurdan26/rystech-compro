<template>
  <div class="min-h-dvh flex flex-col">
    <Header />
    <main class="flex-1">
      <HeroSection />
      <Layanan />
      <Workflow />
      <Primacy />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { nextTick, onMounted } from "vue";
import Footer from "./views/Footer.vue";
import Header from "./views/Header.vue";
import HeroSection from "./views/HeroSection.vue";
import Layanan from "./views/Layanan.vue";
import Primacy from "./views/Primacy.vue";
import Workflow from "./views/Workflow.vue";
import "aos/dist/aos.css";
import Aos from "aos";
import { useHead } from "@unhead/vue";

useHead({
  htmlAttrs: { lang: "id" },
  titleTemplate: "%s | RYSTECH Digital Solution",
  defaultTitle: "RYSTECH Digital Solution",
  meta: [
    {
      name: "description",
      content: "Solusi digital, akademik, dan gadget terbaik",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "RYSTECH Digital Solution" },
    { property: "og:url", content: "https://rysdev.my.id/" },
    { property: "og:image", content: "https://rysdev.my.id/og-thumb.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://rysdev.my.id/og-thumb.png" },
  ],
  link: [{ rel: "canonical", href: "https://rysdev.my.id/" }],
});

onMounted(async () => {
  await nextTick();
  Aos.init();
});
</script>
