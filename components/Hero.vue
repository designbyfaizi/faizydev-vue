<template>
  <div class="hero flex justify-center items-center w-9/12 mx-auto">
    <div class="">
      <div class="hi my-2">
        <h4 class="ml-[3px]">Hi, my name is</h4>
      </div>
      <div class="heading text-colorPrimary font-medium text-7xl my-2 leading-none">
        <h1>Faizan Ullah.</h1>
      </div>
      <div class="subheading text-7xl my-2 leading-none">
        <h1>I design stuff for the web.</h1>
      </div>
      <div class="description my-6 font-light max-w-lg">
        <h3>
          I'm a full stack developer specializing in designing and building web
          services in REACT and VUE JS.
        </h3>
      </div>
      <FaiziButton twStyles="button" placeholder="Get in Touch"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';
.hero {
  min-height: calc(80vh - $nav-height);
  .hi {
    font-weight: 300;
  }
  .heading, .subheading, .description{
    font-family: 'Poppins';
  }
  .button{
    padding: 1rem 1.5rem;
  }
}
</style>
