<template>
    <li class="nav-link ml-4 my-auto hover:text-colorPrimary ease-linear duration-200">
      <NuxtLink class="px-3 py-1 " :to="to"><span class="text-colorPrimary">0{{number}}. </span>{{placeholder}}</NuxtLink>
    </li>
</template>

<script>
    export default {
        props: ['to', 'placeholder', 'number']
    }
</script>

<style lang="scss" scoped>
.nav-link{
    font-size: 14px;
}

</style>