<template>
  <NuxtLink :to="`/products/${card.id}`" class="card flex flex-col gap-1 w-1/3 h-96 overflow-hidden p-0 cursor-pointer">
      <!-- <nuxt-img src="/nuxt-icon.png" /> -->
      <nuxt-img :src="`/images/${card.image || 'fe1.jpg'}`" alt="fe" class="rounded-lg image h-3/5"/>
      <h3 class="header">
          {{card.title}}
      </h3>
      <p class="snippet">
          {{card.snippet}}
      </p>
  </NuxtLink>
</template>

<script>
export default {
    props:['card']
}
</script>

<style lang="scss" scoped>
.card:hover{
  text-decoration: underline;
}

.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
</style>
