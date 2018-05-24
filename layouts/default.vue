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
}
@media (min-width: 1200px) {
  .container {
      max-width: 1230px;
  }
}
</style>
