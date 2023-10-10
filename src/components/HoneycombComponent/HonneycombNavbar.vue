<template>
  <!-- <nav class="bg-cyan-300 fixed py-4 w-full left-0">test</nav> -->
  <nav class="bg-white shadow-md flexed top-0 px-5">
    <div class="flex flex-wrap h-14 justify-between">
      <div class="pt-3">
        <p
          class="text-xl font-semibold text-gray-600 uppercase tracking-wider align-middle text"
        >
          Honeycomb
        </p>
      </div>
      <div>
        <ul class="flex list-none h-14 items-center">
          <li class="py-1" v-for="(item, index) in mainNavigation">
            <router-link
              :to="item.href"
              :key="index"
              class="px-3 hover:text-teal-500 text-sm text-gray-600 font-medium uppercase tracking-widest"
              >{{ item.label }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "HonneycombNavbar",
  setup() {
    const mainNavigation = ref([
      { href: "/", label: "Home", icon: "" },
      { href: "/cafe", label: "Cafe", icon: "" },
      { href: "/farming", label: "Farm", icon: "" },
      { href: "/apartment", label: "Apartment", icon: "" },
    ]);
    return { mainNavigation };
  },
};
</script>

<style lang="css" scoped></style>
