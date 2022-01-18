<template>
  <div class="dark">
    <Nav />
    <div class="container mx-auto">
      <Hero />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { smallCardSections, largeCardSections } from '@/assets/data.js';
import '@/styles/global.scss';


export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    }
  },
})
</script>


<style lang="scss">
@import '@/styles/fonts.scss';

body{
  font-family: 'SF Mono';
}
</style>