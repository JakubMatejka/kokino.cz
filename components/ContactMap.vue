<template>
  <iframe class="contact-map" :src="mapUrl" allowfullscreen></iframe>
</template>

<script>
export default {
  data: function() {
    return {
      mapUrl: "https://www.google.com/maps/embed/v1/place?q=jel%C3%ADnkova%201%2C%20brno&key=" + process.env.MAPS_API_KEY
    }
  }
}
</script>


<style>
  .contact-map {
    filter: grayscale(90%);
    width: 1170px; 
    height: 524px;
    border: 0;
    margin: 0 1rem;
  }
@media (max-width: 1230px) {
  .contact-map {
    margin: 0;
    width: 100%;
  }
}
</style>
        