<template>
  <section id="contact" class="w-full bg-bgsecondary/80 pt-10 md:pt-20">
    <div
      class="flex flex-col items-center justify-center w-[90%] md:max-w-6xl mx-auto"
    >
      <!-- Title -->
      <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-mirror="true"
        class="text-text font-bold text-center text-xl md:text-2xl"
      >
        Contact <span class="text-title">Us</span>
      </h1>

      <!-- Card -->
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-delay="200"
        class="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5"
      >
        <CardFooter :data="data" />
      </div>
    </div>

    <div
      class="mt-10 md:mt-20 border-t border-title/10 py-10 text-center text-sm md:text-base text-white/70 bg-bgsecondary"
    >
      <p>
        <span>&copy</span> 2026 RYSTECH DIGITAL SOLUTION. All rights reserved.
      </p>
      <p>Solusi Digital & Gadget Terpercaya</p>
    </div>
  </section>
</template>

<script setup>
import CardFooter from "../components/CardFooter.vue";
import { dataFooter } from "../data/dataFooter.js";

const data = dataFooter;
</script>
