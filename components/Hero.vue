<template>
  <div class="hero container mx-auto">
    <div class="text-container">
      <h1 class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quaerat sapiente corporis quae necessitatibus, doloribus cum, odio
        minima placeat, id accusantium deleniti quibusdam alias? Corrupti
        laboriosam veritatis consequuntur fuga excepturi?
      </p>
      <button class="button btn">Start Looking!</button>
    </div>
    <div class="img-container">
        <nuxt-img src="/svg/fire-extinguisher.svg" alt="Fire Extinguisher" class="image"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 50vh;
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.text-container {
  width: 50%;
  margin-top: 4rem;
}
.header {
  font-weight: 900;
  font-size: 5rem;
}
.snippet {
  color: grey;
  font-size: 1.25rem;
}
.image {
  width: 27.5rem;
  margin-top: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}
.button:hover {
  width: 21.5rem;
}
@media (max-width: 500px) {
  .Hero {
    height: 40vh;
  }
}
</style>
