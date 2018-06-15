<template>
  <div>
    <main-header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    MainHeader: Header
  }
}
</script>

<style>
body {
  margin: 0 auto;
  padding: 0;
  width: 1230px;
  color: #321814;
  font: 300 1.0em 'Open Sans', sans-serif;
}
@media (min-width: 1200px) {
  .container {
      max-width: 1230px;
  }
}
h2 {
  margin-bottom: 1.8rem;
  font: 700 2.2em 'Playfair Display', serif;
}
h3 {
  margin-bottom: 1.8rem;
  font: 700 1.4em 'Playfair Display', serif;
}
</style>
