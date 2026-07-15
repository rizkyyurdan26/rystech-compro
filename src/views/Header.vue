<template>
  <header class="sticky top-0 z-50 bg-background border-b border-text/10">
    <div class="flex items-center justify-between py-4 mx-auto w-[90%]">
      <!-- Logo -->
      <div class="flex items-center gap-2 md:gap-5">
        <a href="/"
          ><img
            src="../assets/logo.png"
            alt="RysTech"
            title="RysTech"
            class="w-8 md:w-12"
        /></a>
        <h1 class="text-title font-bold text-sm md:text-xl">RYSTECH</h1>
      </div>

      <!-- Hamburger btn -->
      <div class="flex lg:hidden">
        <button class="cursor-pointer text-text" @click="isOpen = !isOpen">
          <Icon icon="material-symbols:menu-rounded" width="24" />
        </button>
      </div>

      <!-- Overlay Mobile Open Menu -->
      <div
        v-if="isOpen"
        class="fixed z-40 lg:hidden inset-0 bg-black/30 transition-opacity duration-300"
      >
        <button @click="isOpen = !isOpen" class="h-full w-full"></button>
      </div>

      <!-- Navbar -->
      <nav
        :class="[
          /* Mobile*/
          'fixed right-0 h-screen w-64 bg-slate-900 z-50 p-6 flex flex-col gap-10 transition-transform duration-500 top-0 items-start border-l border-text/10',
          isOpen ? 'translate-x-0' : 'translate-x-full',

          /* Desktop */
          'lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0 lg:flex-row gap-10 lg:translate-x-0 lg:items-center lg:border-none',
        ]"
      >
        <!-- Close Button <lg -->
        <button
          class="cursor-pointer text-text lg:hidden self-end"
          @click="isOpen = false"
        >
          <Icon icon="material-symbols:close-rounded" width="24" />
        </button>

        <!-- Nav menu -->
        <a
          v-for="nav in navData"
          :key="nav.id"
          :class="[
            'text-text hover:text-title transform duration-300',
            activeMenu === nav.id ? 'text-title font-semibold' : '',
          ]"
          href="#"
          @click.prevent="setActiveMenu(nav.id)"
          >{{ nav.name }}</a
        >

        <a
          class="border text-center border-title text-title font-semibold py-2 px-3 rounded-xl hover:scale-110 transform duration-300"
          href=""
          >Contact Us</a
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const activeMenu = ref("home");
const isOpen = ref(false);
const isScrolled = ref(false);

const navData = [
  { id: "home", name: "Home" },
  { id: "primacy", name: "Primacy" },
  { id: "offers", name: "Offers" },
  { id: "workflow", name: "Workflow" },
];

const setActiveMenu = (menuId) => {
  activeMenu.value = menuId;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
</script>
