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
    font: 300 1em/1.5em 'Open Sans', sans-serif;
    background: url('/images/bg-kavarny.png') no-repeat 3rem 45.1%;
  }
  section {
    margin: 0 0 2.5rem;
  }
  h2 {
    margin-bottom: 1.6rem;
    font: 700 2.3em 'Playfair Display', serif;
  }
  h3 {
    margin-bottom: 1.8rem;
    font: 700 1.4em 'Playfair Display', serif;
  }


  #header {
    text-align: center;
  }

  #header .logo {
    margin: 3rem 0 1.9rem;
  }

  #header .navbar-nav {
    font-size: 85%;
    margin: 0 auto 0.1rem;
    text-transform: uppercase;
  }
  #header .navbar-nav a {
    color: #321814;
    margin: 0 0;
    padding-left: 1rem; padding-right: 1rem;
  }
  #header .navbar-nav a:hover {
    text-shadow: 0 0 .1px #321814, 0 0 .1px #321814;
  }

  #hero {
    margin: 0;
  }
  #hero img {
    width: 100%;
  }
  #hero img.hero-mobile {
    display: none;
  }

  .o-nas {
    padding-top: 5.5rem;
    background: url('/images/bg-o-nas.png') no-repeat 6% 6rem;
    position: relative;
  }
  .o-nas-image {
    margin-top: .7rem;
  }
  .o-nas-sprite {
    position: absolute;
    top: 92%;
    right: -1rem;
    z-index: 3;
  }

  .nase-nabidka-text {
    padding-top: 5.6rem;
    margin-bottom: 5rem;
  }
  .nase-nabidka-obrazky {
    margin: 0 -1rem;
  }

  .kavarny {
    background: url('/images/bg-kavarny-2.png') no-repeat 95% 100%;
  }
  .kavarny li strong {
    font-weight: normal;
  }
  .kavarny-obrazky {
    margin: 0 -1rem;
  }
  .kavarny-row {
    padding-top: 5.8rem;
  }
  .kavarny-text {
    margin-bottom: 3.5rem;
    margin-right: 20rem;
  }
  .kavarny-brno {
    margin-bottom: 2.7rem;
  }
  .kavarny-brno .offset-1 {
    margin-left: 6%;
  }
  .kavarny-row2 {
    margin-bottom: 4.6rem;
  }

  .historie {
    background: url('/images/bg-historie.png') no-repeat 5% 63%;
  }
  .historie-obrazky {
    margin: 0 -1rem;
  }
  .historie-obrazky img {
    width: 100%;
    margin-bottom: 3rem;
  }
  .historie-text {
    padding-left: 1.7rem;
  }
  .historie-text h2 {
    padding-top: 5.5rem;
  }
  .historie-text h2,
  .historie-text p {
    margin-left: 5.8rem;
    margin-right: 5.8rem;
  }
  .historie-pravy-obrazek {
    padding-left: 15px;
  }

  .kontakt-header {
    padding-top: 2.5rem;
  }
  .kontakt-text {
    margin-bottom: 4.5rem;
  }
  .kontakt-text a {
    color: #321814;
  }
  .btn-facebook {
    position: absolute;
    top: -55%;
    right: 12%;
  }
  .btn-facebook:hover {
    filter: grayscale(50%) brightness(20%);
  }

  .contact-map {
    filter: grayscale(90%);
    width: 1170px;
    height: 524px;
    border: 0;
    margin: 0 1rem 0 0;
  }

  .footer {
    margin: 3.5rem 0 4.5rem;
  }


  .stahnout-katalog {
    margin-bottom: 6rem;
    text-align: center;
  }
  .objednat-si-button {
    margin-bottom: 1rem;
  }
  .rounded-button a {
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    border-radius: 2rem;
    background-color: #b77f39;
    padding: .8rem 3rem;
  }
  .rounded-button a:hover {
    background-color: #321814;
  }
  .stahnout-katalog-link a {
    color: #321814;
  }
  .stahnout-katalog-link a:hover {
    color: #b77f39;
    text-decoration: none;
  }

  @-ms-viewport {
    width: device-width;
  }

  @media (min-width: 768px) {
    .container {
      max-width: 1200px;
    }
  }

  @media (max-width: 767px) {
    body {
      width: 100%;
      background-size: 23%;
      background-position: -.5rem 32.3%;
    }
    .container {
      max-width: 100%;
    }
    section {
      margin-bottom: 1.5rem;
    }

    h2 {
      margin-bottom: .5rem;
    }

    #header .navbar {
      padding: 0;
    }
    #header .logo {
      display: none;
    }
    #hero {
      margin-bottom: .5rem;
    }
    #hero img.hero-desktop {
      display: none;
    }
    #hero img.hero-mobile {
      display: initial;
    }

    .navbar-toggler {
      display: none;
      position: absolute;
      top: 1.75rem;
      right: 1rem;
    }
    #header .navbar-collapse {
      display: none;
      margin: -8px -15px;
      background-color: #b77f39;
      text-align: left;
      padding: 1rem 0 2rem 1rem;
    }
    #header .navbar-nav {
      text-transform: none;
      font: 700 2em 'Playfair Display', serif;
    }
    #header .navbar-nav li {
      margin-bottom: 1rem;
    }
    #header .navbar-collapse a {
      color: #fff;
    }

    .o-nas,
    .historie,
    .nase-nabidka-text,
    .kavarny-obrazky,
    .kavarny-row,
    .kavarny-row2,
    .historie-obrazky,
    .kontakt-header,
    .kontakt-text {
      padding-left: 2rem; padding-right: 2rem;
    }

    .o-nas {
      background-position: 0.5rem 2.2rem;
      padding-top: 2rem;
    }
    .o-nas-sprite {
      width: 20%;
      top: 95%;
      right: 0;
    }
    .o-nas-image {
      width: 100%;
    }
    .o-nas-text {
      margin-bottom: 1rem;
    }

    .nase-nabidka-obrazky {
      margin: 0 -1rem 0;
      padding-left: 1rem; padding-right: 1rem;
    }
    .nase-nabidka-obrazky img {
      height: 100%;
      margin-bottom: 1.5rem;
    }
    .nase-nabidka-text {
      padding-top: 1rem;
      margin: 0 -2rem 2rem;
    }

    .kavarny {
      background-size: 30%;
      background-position: 100% 40%;
    }
    .kavarny-text {
      margin: 0 0 3rem;
    }
    .kavarny li {
      font-size: 80%;
    }
    .kavarny li strong {
      font-size: 120%;
    }
    .kavarny-row {
      padding-top: .5rem;
      padding-left: 1rem; padding-right: 1rem;
    }
    .kavarny-row2 {
      padding-left: 1rem; padding-right: 1rem;
    }
    .kavarny-obrazky img {
      width: 100%;
      margin-bottom: 1.5rem;
    }

    .historie {
      background-size: 30%;
      background-position: 5% -60%;
    }
    .historie-text {
      padding-left: 0;
      padding-right: 0;
    }
    .historie-text img {
      width: 100%;
    }
    .historie-text h2 {
      padding-top: 3rem;
    }
    .historie-text h2,
    .historie-text p {
      margin-left: 0;
      margin-right: 0;
    }
    .historie-pravy-obrazek img {
      margin-top: 1.5rem;
      width: 100%;
    }
    .historie-obrazky img {
      margin-bottom: 1.5rem;
    }

    .kontakt {
      padding-left: 0;
      padding-right: 0;
    }
    .kontakt-text {
      margin-bottom: 2rem;
    }
    .kontakt-header {
      padding-top: 1rem;
    }
    .btn-facebook {
      position: relative;
      left: 0;
    }
    .btn-facebook img {
      width: 19%;
    }

    .contact-map {
      margin: 0;
      width: 100%;
    }

    .stahnout-katalog {
      margin-bottom: 3rem;
    }
  }
</style>

