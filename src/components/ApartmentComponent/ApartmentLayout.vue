<template>
  <div class="bg-slate-100 text-gray-600 min-h-screen">
    <div>
      <ApartmentNavbar />
    </div>
    <main class="pt-6 px-7">
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import ApartmentNavbar from "../ApartmentComponent/ApartmentNavbar.vue";
export default {
  name: "ApartmentLayout",
  components: {
    ApartmentNavbar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
