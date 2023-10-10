<template>
  <nav class="bg-white shadow-md flexed top-0 px-7 w-full">
    <div class="flex flex-wrap h-14 items-center justify-between mx-auto">
      <div class="flex pt-2.5">
        <router-link to="/apartment/home">
          <img
            class="-mt-[15px]"
            src="../../assets/img/logo-apartment.jpg"
            width="45"
            height="45"
            alt=""
          />
        </router-link>
        <div>
          <router-link
            class="absolute pl-2.5 -mt-2.5 text-gray-500 text-xs font-medium"
            to="/home"
            >Honeycomb</router-link
          >

          <router-link
            class="absolute text-xl pl-2 font-semibold text-teal-400 tracking-wider"
            to="/apartment/home"
            >Apartment</router-link
          >

          <!-- <p class="text-xl px-2 font-semibold text-gray-500 tracking-widest">
                Apartment
              </p> -->
        </div>
      </div>
      <div v-if="userAuthen.isLogin" class="flex">
        <ul class="flex list-none items-center m-auto">
          <li class="py-1" v-for="(item, index) in mainNavigation">
            <router-link
              :to="item.href"
              :key="index"
              class="px-3 hover:text-teal-500 text-sm text-gray-600 font-medium uppercase tracking-widest"
              >{{ item.label }}</router-link
            >
          </li>
        </ul>
        <!-- <ProfileComponent /> -->
      </div>
      <div v-else>
        <!-- <AuthenComponent /> -->
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from "vue";
import { authenStore } from "../../stores/authenStore";
//   import AuthenComponent from "../CommonComponent/AuthenComponent.vue";
//   import ProfileComponent from "../CommonComponent/ProfileComponent.vue";
export default {
  name: "ApartmentNavbar",
  components: {
    //   AuthenComponent,
    //   ProfileComponent,
  },
  setup() {
    const userAuthen = authenStore();
    const mainNavigation = ref([
      { href: "/apartment/dashboard", label: "Dashboard", icon: "" },
      // { href: "/apartment/rental", label: "Rental", icon: "" },
      { href: "/apartment/billing", label: "Billing", icon: "" },
      { href: "/apartment/repair", label: "Repair", icon: "" },
      { href: "/apartment/setting", label: "Setting", icon: "" },
    ]);
    return { mainNavigation, userAuthen };
  },
};
</script>

<style lang="css" scoped></style>
