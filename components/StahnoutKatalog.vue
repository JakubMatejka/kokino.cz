<template>
    <div class="stahnout-katalog">
        <div class="objednat-si-button">
            <a href="mailto:kokino@kokino.cz" class="btn">Objednat si</a>
        </div>
        <div class="stahnout-katalog-link">
            <a href="/kokino-katalog.pdf">Stáhnout katalog</a>
        </div>
    </div>
</template>

<style>
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
    font-size: 110%;
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
@media (max-width: 1230px) {
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

