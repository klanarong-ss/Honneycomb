<template>
  <div
    class="wrapper mx-auto p-0 border text-gray-600 bg-slate-100 h-screen w-full left-0"
  >
    <div>
      <HonneycombNavbar />
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import HonneycombNavbar from "../HoneycombComponent/HonneycombNavbar.vue";
export default {
  name: "HoneycombLayout",
  components: {
    HonneycombNavbar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css">
body {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-feature-settings: normal;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  color: #4b5563;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
</style>
