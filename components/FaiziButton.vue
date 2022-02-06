<template>
  <button :class="`button ${twStyles}`">{{placeholder}}</button>
</template>

<script>
//twStyles = tailWind Styles
export default {
    props:['placeholder', 'twStyles']
}
</script>

<style lang="scss" scoped>
@import '@/styles/global';
.button {
  padding: 0.6rem 0.9rem;
  border: 1px solid $color-primary;
  font-weight: 100;
  font-size: 14px;
  color: $color-primary;
  transition: all 0.3s;
  &:hover{
    background: $color-accent;
    
  }
}
</style>
