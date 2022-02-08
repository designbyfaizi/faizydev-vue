<template>
    <div class="dark">
        <NavBar />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import NavBar from "~/components/Nav/NavBar.vue"
    export default {
        components:{NavBar}
    }
</script>

<style lang="scss">
@import '@/styles/global.scss';
</style>