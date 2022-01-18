<template>
  <nav class="">
    <div class="h-28 flex justify-between align-middle px-12 mx-auto">
      <div>
        <nuxt-link
          to="/"
          class="logo my-auto h-full flex w-[50px] ease-linear duration-200"
        >
          <nuxt-img
            class="max-w-[60px] my-auto"
            src="/images/designbyfaizi.png"
            alt="Design by Faizi"
          >
          </nuxt-img>
        </nuxt-link>
      </div>
      <ol class="nav-items my-auto flex">
        <FaiziNavLink
          v-for="navLink in navLinks"
          :key="navLink.id"
          :to="navLink.to"
          :placeholder="navLink.placeholder"
          :number="navLink.id"
        />
        <FaiziButton class="ml-3" placeholder="Resume" />
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

<style lang="scss" scoped></style>
