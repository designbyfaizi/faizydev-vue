<template>
  <div class="container mx-auto mt-4">
    <h4 class="header">{{cardsSection.title}}</h4>
    <p class="snippet">
      {{cardsSection.snippet}}
    </p>

    <div class="cards-container flex flex-row gap-14">
      <LargeCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props:['cardsSection']
}
</script>

<style lang="scss" scoped>
.header {
  font-weight: 700;
  font-size: 1.5rem;
}
.snippet {
  color: grey;
  margin-bottom: 1.5rem;
}
.cards-container {
  display: flex;
  justify-content: space-between;
}
</style>
