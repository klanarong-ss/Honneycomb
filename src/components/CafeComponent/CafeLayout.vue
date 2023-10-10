<template>
  <div>
    <p>CafeLayout</p>
  </div>
  <main>
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>

<script lang="ts">
export default {
  name: "CafeLayout",
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
