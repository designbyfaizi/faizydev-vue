<template>
  <button class="button">{{placeholder}}</button>
</template>

<script>
export default {
    props:['placeholder']
}
</script>

<style lang="scss" scoped>
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
  &:hover{
      width: 21.5rem;
  }
}
</style>
