<template>
  <NuxtLink :to="`/products/${card.id}`" class="card-container">
    <nuxt-img
      :src="`/images/${card.image || 'fe1.jpg'}`"
      alt="fe"
      class="image"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: ['card'],
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 24%;
  height: 12.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  &:hover{
      transform: scale(1.02);
  }
}
.image {
  width: 100%;
  height: 100%;
}
</style>
