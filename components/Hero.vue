<template>
  <div
    class="hero container mx-auto relative flex flex-row gap-2 py-20 justify-between items-start"
  >
    <div class="text-container w-3/6 my-auto flex flex-col gap-3">
      <h1 class="header font-black text-7xl">Find your Fire Extinguisher</h1>
      <p class="snippet text-gray-500 text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quaerat sapiente corporis quae necessitatibus, doloribus cum, odio
        minima placeat, id accusantium deleniti quibusdam alias? Corrupti
        laboriosam veritatis consequuntur fuga excepturi?
      </p>
      <button class="button">Start Looking!</button>
    </div>
    <div class="img-container">
      <nuxt-img
        src="/svg/fire-extinguisher.svg"
        alt="Fire Extinguisher"
        class="image"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 50vh;
  .text-container {
    .header {
      /* font-size: 5rem; */
    }
    .snippet {
      /* color: grey; */
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
  }
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
@media (max-width: 500px) {
  .Hero {
    height: 40vh;
  }
}
</style>
