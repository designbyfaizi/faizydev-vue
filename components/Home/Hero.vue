<template>
  <div class="hero container flex items-center max-w-5xl mx-auto">
    <div class="">
      <div class="preHeading my-2">
        <h4 class="ml-1">{{heroData.preHeading}}</h4>
      </div>
      <div class="heading font-medium text-7xl my-2 leading-none">
        <h1>{{heroData.heading}}</h1>
      </div>
      <div class="subHeading text-7xl my-2 leading-none">
        <h1>{{heroData.subHeading}}</h1>
      </div>
      <div class="description my-6 font-light max-w-lg">
        <h3>
          {{heroData.description}}
        </h3>
      </div>
      <FaiziButton twStyles="button" placeholder="Get in Touch"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return{
      heroData:{
        preHeading: "Hi, my name is",
        heading: "Faizan Ullah.",
        subHeading: "I design stuff for the web.",
        description: "I'm a full stack developer specializing in designing and building web services in REACT and VUE JS."
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';
.hero {
  min-height: calc(80vh - $nav-height);
  .preHeading {
    font-weight: 100;
    color: $color-primary;
  }
  .heading, .subHeading, .description{
    font-family: 'Poppins';
  }
  .heading, .subHeading{
    font-weight: 600;
  }
  .heading{
    color: $color-primary;
  }
  .button{
    padding: 1rem 1.5rem;
  }
}
</style>
