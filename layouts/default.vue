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
  font: 300 1.1em 'Open Sans', sans-serif;
  background: url('/images/bg-kavarny.png') no-repeat 3rem 45.5%;
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
  margin: 3.2rem 0 2.2rem;
}

#header .navbar-nav {
  font-size: 75%;
  margin: 0 auto 0.5rem;
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

.o-nas {
  padding-top: 5.5rem;
  background: url('/images/bg-o-nas.png') no-repeat 6% 6rem;
  position: relative;
}
.o-nas-sprite {
  position: absolute;
  top: 92%;
  right: -1rem;
  z-index: 3;
}
  
.nase-nabidka-text {
  padding-top: 5.5rem;
  margin-bottom: 2.8rem;
}
.nase-nabidka-obrazky {
  margin: 0 -1rem;
}

.kavarny {
  background: url('/images/bg-kavarny-2.png') no-repeat 95% 100%;
}
.kavarny-obrazky {
  margin: 0 -1rem;
}
.kavarny-row {
  padding-top: 5.5rem;
}
.kavarny-text {
  margin-bottom: 3.5rem;
  margin-right: 20rem;
}
.kavarny-brno {
  margin-bottom: 3rem;
}
.kavarny-brno .offset-1 {
  margin-left: 6%;
}
.kavarny-row2 {
  margin-bottom: 4.5rem;
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
    padding-top: 3.3rem;
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
  width: 100px;
  height: 151px;
  background: url('/images/btn-facebook.png') no-repeat;
}
.btn-facebook:hover {
  background: url('/images/btn-facebook-hover.png') no-repeat;
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
.objednat-si-button a {
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    border-radius: 2rem;
    background-color: #b77f39;
    padding: .8rem 3rem;
}
.objednat-si-button a:hover {
    background-color: #321814;
}
.stahnout-katalog-link a {
    color: #321814;
}
.stahnout-katalog-link a:hover {
    color: #b77f39;
    text-decoration: none;
}


@media (min-width: 1200px) {
  .container {
      max-width: 1200px;
  }
}

@media (max-width: 1200px) {
  body {
    background-size: 30%;
    background-position: -1rem 32.8%;
    font-size: 3.2rem;
    line-height: 4.5rem;
  }
  .container {
      max-width: 100%;
  }

  #header {
    background: url('/images/hero-mobile.png') no-repeat;
    background-size: 100%;
    width: 100%;
    height: 115rem;

  }
  #header .logo {
    display: none;
  }
  #hero {
    display: none;
  }

  .navbar-toggler {
    font-size: 120%;
    position: absolute;
    top: 6rem;
    right: 6rem;
  }
  #header .navbar-collapse {
    background-color: #b77f39;
    text-align: left;
    padding: 6rem 0 8rem 6rem;
  }
  #header .navbar-nav {
    font-size: 120%;
    text-transform: none;
    font: 700 2.3em 'Playfair Display', serif;
  }
  #header .navbar-nav li {
    margin-bottom: 6rem;
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
    padding-left: 5rem; padding-right: 5rem;
  }

  #hero {
    margin-bottom: 3rem;
  }

  .o-nas {
    background-size: 30%;
    background-position: 1rem 6rem;
  }
  .o-nas-sprite {
    width: 18%;
    top: 95%;
    right: 3rem;
  }
  .o-nas-image {
    width: 100%;
  }
  .o-nas-text {
    margin-bottom: 9rem;
  }

  .nase-nabidka-obrazky {
    margin: 0 -2rem;
    padding-top: 2rem;
    padding-left: 5rem; padding-right: 5rem;
  }
  .nase-nabidka-obrazky img {
    height: 100%;
    margin-bottom: 4rem;
  }
  .nase-nabidka-text {
    margin-bottom: 8rem;
  }

  .kavarny {
    background-size: 30%;
    background-position: 100% 46%;
  }
  .kavarny-text {
    margin-right: 0;
    margin-bottom: 6rem;
  }
  .kavarny-row {
    padding-top: 3rem;
  }
  .kavarny-obrazky img {
      width: 100%;
      margin-bottom: 3rem;
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
  .historie-text h2,
  .historie-text p {
    margin-left: 15px;
    margin-right: 15px;
  }
  .historie-pravy-obrazek img {
    margin-top: 3rem;
    width: 100%;
  }

  .kontakt {
    padding-left: 0;
    padding-right: 0;
  }
  .btn-facebook {
    position: relative;
    background-size: 200%;
    width: 200px;
    height: 300px;
  }

  .contact-map {
    margin: 0;
    width: 100%;
  }

  .stahnout-katalog {
    margin-bottom: 10rem;
  }
  .objednat-si-button {
    margin-bottom: 2.5rem;
  }
  .objednat-si-button a {
    border-radius: 4rem;
    font-size: 2.8rem;
    padding: 2rem 9rem;
  }
}
</style>
