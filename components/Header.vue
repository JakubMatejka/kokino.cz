<template>
  <b-container class="header">
    <header-logo/>
    <header-menu/>
    <header-hero/>
  </b-container>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Hero from './Hero.vue'

export default {
  components: {
    HeaderLogo: Logo,
    HeaderMenu: Menu,
    HeaderHero: Hero
  }
}
</script>

<style>
.header {
  text-align: center;
}
</style>
