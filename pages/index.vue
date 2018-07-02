<template>
  <div>
    <section class="container o-nas" id="o-nas">
      <img src="/images/o-nas-sprite.png" class="o-nas-sprite" alt="" />
      <div class="row">
        <div class="col-xl-4 offset-xl-1 o-nas-text">
          <h2>O nás</h2>
          <p>Jsme malý kolektiv, který pracuje na tom, aby byly vybrané kavárny v Brně a okolí pravidelně zásobeny našimi dortíky. Pečeme rovněž pohoštění pro svatby, oslavy v rodinném či přátelském kruhu, vánoční sladkosti. Zajištujeme také cukrovinky na rauty či firemní události.</p>
        </div>
        <div class="col-xl-6 offset-xl-1">
          <img src="/images/cokoladovy-dortik.jpg" alt="Čokoládový dortík" title="Čokoládový dortík" class="o-nas-image" />
        </div>
      </div>
    </section>
    <section class="container nase-nabidka">
      <nase-nabidka-obrazky/>
      <div class="row nase-nabidka-text" id="nase-nabidka">
        <div class="col-xl-8 offset-xl-1">
          <h2>Naše nabídka</h2>
          <p>Narozeninový dort? Čokoládový dezert? Nebo ochutnejte sněhový Mont Blanc, Kaštanové polínko, dort Černý les či kusové cukrovinky, které jsou perfektní pro každou oslavu, pěknou chvíli, festival či veselku. V běžné velikosti či mini. Stáhněte si katalog všech našich sladkostí! Bude obtížné si vybrat!</p>
        </div>
      </div>
      <stahnout-katalog/>
    </section>
    <section class="container kavarny">
      <kavarny-obrazky/>
      <div class="row kavarny-row" id="kavarny">
        <div class="col-xl-11 offset-xl-1">
          <h2>Kavárny</h2>
          <p class="kavarny-text">Naše hvězda kaváren a vůně naší výrobny - čokoládový dortík s mořskou solí. Ten, který spolu s našimi zákazníky nejednou opustil hranice rodného Brna a rozjel se po Evropě. Jsme pyšní na to, že se všude stal sladkým středem pozornosti. Můžete jej, spolu s dalšími našimi čokoládovými dortíky, ochutnat každý den ve vybraných brněnských kavárnách. Již řadu let je vyrábíme podle našich osvědčených receptur a ze stále stejně kvalitních surovin.</p>
          <h3>Brno</h3>
          <div class="row no-gutters kavarny-brno">
            <div class="col-xl-5">
              <ul class="list-unstyled">
                <li>Kavárna Tungsram, Kapucínské nám. 7</li>
                <li>Svačinárna Preclík, Gorkého 4</li>
                <li>Literární čajovna Skleněná louka, Kounicova 23</li>
                <li>Kavárna Morgal, Místodržitelský palác, Moravské nám. 1A</li>
                <li>Bar Scala, Moravské nám. 3</li>
                <li>Kavárna Mezzanine, Údolní 15</li>
                <li>Kavárna Steiner, Gorkého 38</li>
                <li>Air café, Zelný trh 8</li>
              </ul>
            </div>
            <div class="col offset-xl-1">
              <ul class="list-unstyled">
                <li>Monogram Esspreso Bar, Kapucínské nám. 12</li>
                <li>Kavárna Flexaret, Kopečná 21</li>
                <li>Gimmi lounge cafe, Slovanské nám. 1</li>
                <li>Le Petit cafe, Minská 14</li>
                <li>Naše věci, Jiráskova 16</li>
                <li>Bílá vrána, Kristenova 1, Komín</li>
                <li>Restaurace Viva, Králova 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row kavarny-row2">
        <div class="col offset-xl-1">
          <h3>Mimo Brno</h3>
          <ul class="list-unstyled">
            <li>Kavárna a galerie Stříbský mlýn, Stříbský mlýn 4, Ivančice</li>
            <li>Kavárna na pěší zóně, Lipová 342, Náměšť nad Oslavou</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container historie">
      <div class="row justify-content-between no-gutters">
        <div class="col-xl-6 historie-text">
          <img src="/images/ovocny-kosicek.jpg" alt="Ovocný košíček" title="Ovocný košíček" />
          <h2 id="historie">Historie</h2>
          <p>Kokino se zrodilo roku 2010. Ve svých počátcích fungovalo jako příležitostné sladké občerstvení na různých oslavách. Hlavně v Kamenné kolonii v Brně. Zakladatelkami byly Romana Zubalová a Míša Lipenská. Dnes už Romča věnuje všechny své síly nejlepším makronkům ve střední Evropě (Cukrovinky Republika) a Kokino nadálé řídí Míša Lipenská.</p>
        </div>
        <div class="col-xl-6 historie-pravy-obrazek text-right">
          <img src="/images/ovocny-kosicek-2.jpg" alt="Ovocný košíček" title="Ovocný košíček" />
        </div>
      </div>
    </section>
    <section class="container kontakt">
      <historie-obrazky/>
      <div class="row kontakt-header" id="kontakt">
        <div class="col-xl-11 offset-xl-1">
          <h2>Kontakt</h2>
        </div>
      </div>
      <div class="row kontakt-text">
        <div class="col-xl-5 offset-xl-1">
          <p>Kontaktní osobou je Michaela Lipenská<br />
          Tel.: +420 777 982 384<br />
          E-mail: <a href="mailto:kokino@kokino.cz">kokino@kokino.cz</a><br />
          IČ: 874 44 780</p>
        </div>
        <div class="col-xl-6">
          <p>Naši výrobnu najdete na ulici:<br />
          Jelínkova 1, Brno-Žabovřesky, 616 00<br />
          Provozní dobu máme dle objednávek</p>
          <a href="https://www.facebook.com/kokino.cz" class="btn-facebook"></a>
        </div>
      </div>
      <stahnout-katalog/>
      <contact-map/>
    </section>
    <section class="container footer">
      <div class="row">
        <div class="col text-center">
          <img src="/images/logo-footer.png" alt="Kokino" title="Kokino" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactMap from '~/components/ContactMap.vue'
import NaseNabidkaObrazky from '~/components/NaseNabidkaObrazky.vue'
import StahnoutKatalog from '~/components/StahnoutKatalog.vue'
import KavarnyObrazky from '~/components/KavarnyObrazky.vue'
import HistorieObrazky from '~/components/HistorieObrazky.vue'

export default {
  head: {
    link: [
      { rel: "preload", href: "/images/btn-facebook-hover.png", as: "image", type: "image/png" },
    ],
  },
  components: {
    NaseNabidkaObrazky,
    StahnoutKatalog,
    KavarnyObrazky,
    HistorieObrazky,
    ContactMap
  }
}
</script>
