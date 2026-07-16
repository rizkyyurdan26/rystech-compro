<template>
 <section
  id="home"
  class="relative min-h-[calc(100dvh-72px)] flex w-full items-center justify-center  text-white px-6 overflow-hidden border-b border-title/10"
>
    
    <!-- Radial bg -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] rounded-full bg-radial from-title/20 via-title/5 to-transparent blur-3xl pointer-events-none z-0"
    ></div>

    <!-- Content -->

    <div
      class=" flex flex-col gap-10 md:gap-14 items-center justify-center py-20 md:py-0 w-[90%] mx-auto z-10"
    >
      <!-- Title -->
      <div class="flex flex-col items-center text-center gap-2 md:gap-3">
        <h1 class="text-title font-bold text-3xl md:text-5xl">RYSTECH</h1>
        <h1 class="text-text font-bold text-3xl md:text-5xl">
          DIGITAL SOLUTION
        </h1>
        <p class="text-text/70 text-base md:text-lg mt-5 max-w-xl">
          Solusi digital & gadget terpercaya untuk kebutuhan bisnis, teknologi,
          dan akademik Anda
        </p>
      </div>

      <!-- Card hero -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 lg:gap-10 w-full md:w-auto">
        <CardHero
          icon="twemoji:laptop"
          title="Jasa Layanan Digital"
          :data="dataWeb"
        />
        <CardHero
          icon="carbon:service-id"
          title="Service Sparepart HP"
          :data="dataMobile"
        />
        <CardHero
          icon="fluent-color:book-database-24"
          title="Konsultan Tugas/Skripsi"
          :data="dataCons"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardHero from "../components/CardHero.vue";
import { dataDigital } from "../data/dataDigital.js";
import { dataHp } from "../data/dataHp.js";
import { dataKonsultan } from "../data/dataKonsultan.js";

const dataWeb = dataDigital;
const dataMobile = dataHp;
const dataCons = dataKonsultan;
</script>
