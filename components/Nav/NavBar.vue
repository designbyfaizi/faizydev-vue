<template>
  <nav class="">
    <div class="nav flex justify-between align-middle px-12 mx-auto">
      <div>
        <nuxt-link
          to="/"
          class="logo my-auto h-full flex w-[50px] ease-linear duration-200"
        >
          <nuxt-img
            class="max-w-[60px] my-auto"
            src="/svg/designbyfaizi.svg"
            alt="Design by Faizi"
          />
          
        </nuxt-link>
      </div>
      <ol class="nav-items my-auto flex">
        <nav-faizi-link
          v-for="navLink in navLinks"
          :key="navLink.id"
          :to="navLink.to"
          :placeholder="navLink.placeholder"
          :number="navLink.id"
        />
        <FaiziButton class="ml-6" placeholder="Resume" />
      </ol>
    </div>
  </nav>
</template>

<script>
import { navLinks } from '@/assets/navLinks.js'

export default {
  data() {
    return {
      navLinks: navLinks,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';
.nav{
  height: $nav-height;
}
</style>
