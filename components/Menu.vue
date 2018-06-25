<template>
  <b-nav class="justify-content-center">
    <b-nav-item v-on:click="menuLink" href="#o-nas">O nás</b-nav-item>
    <b-nav-item v-on:click="menuLink" href="#nase-nabidka">Naše nabídka</b-nav-item>
    <b-nav-item v-on:click="menuLink" href="#kavarny">Kavárny</b-nav-item>
    <b-nav-item v-on:click="menuLink" href="#historie">Historie</b-nav-item>
    <b-nav-item v-on:click="menuLink" href="#kontakt">Kontakt</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  methods: {
    menuLink: (event) => {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(event.target.hash).offset().top
      }, 500, () => location.hash = event.target.hash);
    }
  }
}
</script>

<style>
#header .nav {
  font-size: 90%;
  margin: 0 auto 0.7rem;
  text-transform: uppercase;
}
#header .nav a {
  color: #321814;
  margin: 0 0;
}
#header .nav a:hover {
  text-shadow: 0 0 .1px #321814, 0 0 .1px #321814;
}
</style>
