<template>
  <div>
    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FarmingLayout",
  setup() {
    return {};
  },
});
</script>

<style lang="css" scoped></style>
