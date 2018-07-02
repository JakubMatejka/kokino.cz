<template>
  <div>
    <b-container id="header">
      <header-logo/>
      <header-menu/>
    </b-container>
    <header-hero/>
  </div>
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
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,700|Playfair+Display:700,700i&amp;subset=latin-ext' }
    ]
  }
}
</script>
