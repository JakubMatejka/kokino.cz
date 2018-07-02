<template>
  <b-navbar toggleable="xl" class="navbar-dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse" justify-content-center>
      <b-navbar-nav>
        <b-nav-item v-on:click="menuLink" href="#o-nas">O nás</b-nav-item>
        <b-nav-item v-on:click="menuLink" href="#nase-nabidka">Naše nabídka</b-nav-item>
        <b-nav-item v-on:click="menuLink" href="#kavarny">Kavárny</b-nav-item>
        <b-nav-item v-on:click="menuLink" href="#historie">Historie</b-nav-item>
        <b-nav-item v-on:click="menuLink" href="#kontakt">Kontakt</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
