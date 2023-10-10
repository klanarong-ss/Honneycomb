<template>
  <div class="wrapper bg-white text-gray-600 h-screen">
    <div
      class="h-80 w-2/5 float-right mr-[80px] mt-[10%] border border-gray-800 text-center"
    >
      <p class="font-semibold mt-5 text-3xl">Sing Up</p>
      <p>Login Page</p>
      <p>Login Page</p>
      <p>Login Page</p>
      <p>Login Page</p>
      <p>Login Page</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    return {};
  },
});
</script>

<style lang="css" scoped>
.wrapper::before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 55%;
  background-image: linear-gradient(-45deg, #20dbc2 0%, #00bfa6 100%);
  transform: translateY(-58%);
  border-radius: 44%;
}
</style>
