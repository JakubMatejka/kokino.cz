<template>
  <div>
    <section class="container" id="o-nas">
      <div class="row">
        <div class="col-4 offset-1">
          <h2>O nás</h2>
          <p>Jsme malý kolektiv, který pracuje na tom, aby byly vybrané kavárny v Brně a okolí pravidelně zásobeny našimi dortíky. Pečeme rovněž pohoštění pro svatby, oslavy v rodinném či přátelském kruhu, vánoční sladkosti. Zajištujeme také cukrovinky na rauty či firemní události.</p>
        </div>
        <div class="col-6 offset-1">
          <img src="/images/cokoladovy-dortik.jpg" alt="Čokoládový dortík" title="Čokoládový dortík" />
        </div>
      </div>
    </section>
    <section class="container nase-nabidka">
      <nase-nabidka-obrazky/>
      <div class="row nase-nabidka-text">
        <div class="col-8 offset-1">
          <h2>Naše nabídka</h2>
          <p>Narozeninový dort? Čokoládový dezert? Nebo ochutnejte sněhový Mont Blanc, Kaštanové polínko, dort Černý les či kusové cukrovinky, které jsou perfektní pro každou oslavu, pěknou chvíli, festival či veselku. V běžné velikosti či mini. Stáhněte si katalog všech našich sladkostí! Bude obtížné si vybrat!</p>
        </div>
      </div>
      <stahnout-katalog/>
    </section>
    <section class="container" id="kavarny">
      <kavarny-obrazky/>
      <div class="row">
        <div class="col-11 offset-1">
          <h2>Kavárny</h2>
          <p class="kavarny-text">Naše hvězda kaváren a vůně naší výrobny - čokoládový dortík s mořskou solí. Ten, který spolu s našimi zákazníky nejednou odpustil hranice rodného Brna a rozjel se po Evropě. Jsme pyšní na to, že se všude stal sladkým středem pozornosti. Můžete jej, spolu s dalšími našimi čokoládovými dortíkíky, ochutnat každý den ve vybraných brněnských kavárnách. Již řadu let je vyrábíme podle našich osvědčených receptur a ze stále stejně kvalitních surovin.</p>
          <h3>Brno</h3>
          <div class="row no-gutters kavarny-brno">
            <div class="col-5">
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
            <div class="col offset-1">
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
      <div class="row">
        <div class="col offset-1">
          <h3>Mimo Brno</h3>
          <ul class="list-unstyled">
            <li>Kavárna a galerie Stříbský mlýn, Stříbský mlýn 4, Ivančice</li>
            <li>Kavárna na pěší zóně, Lipová 342, Náměšť nad Oslavou</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container" id="historie">
      <div class="row justify-content-between">
        <div class="col historie-text">
          <img src="/images/ovocny-kosicek.jpg" alt="Ovocný košíček" title="Ovocný košíček" />
          <h2>Historie</h2>
          <p>Kokino se zrodilo roku 2010. Ve svých počátcích fungovalo jako příležitostné sladké občerstvení na různých oslavách. Hlavně v Kamenné kolonii v Brně. Zakladatelkami byly Romana Zubalová a Míša Lipenská. Dnes už Romča věnuje všechny své síly nejlepším makronkům ve střední Evropě (Cukrovinky Republika) a Kokino nadálé řídí Míša Lipenská.</p>
        </div>
        <div class="col historie-pravy-obrazek">
          <img src="/images/ovocny-kosicek-2.jpg" alt="Ovocný košíček" title="Ovocný košíček" />
        </div>
      </div>
    </section>
    <section class="container" id="kontakt">
      <historie-obrazky/>
      <div class="row">
        <div class="col-11 offset-1">
          <h2>Kontakt</h2>
        </div>
      </div>
      <div class="row kontakt-text">
        <div class="col-5 offset-1">
          <p>Kontaktní osobou je Michaela Lipenská<br />
          Tel.: +420 777 982 384<br />
          E-mail: kokino@kokino.cz<br />
          IČ: 874 44 780</p>
        </div>
        <div class="col">
          <p>Naši výrobnu najdete na ulici:<br />
          Jelínkova 1, Brno-Žabovřesky, 616 00<br />
          Provozní dobu máme dle objednávek</p>
        </div>
      </div>
      <stahnout-katalog/>
      <!--map/-->
    </section>
    <section class="container">
      <div class="row">
        <div class="col">
          Kokino
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import Header from '~/components/Map.vue'
import NaseNabidkaObrazky from '~/components/NaseNabidkaObrazky.vue'
import StahnoutKatalog from '~/components/StahnoutKatalog.vue'
import KavarnyObrazky from '~/components/KavarnyObrazky.vue'
import HistorieObrazky from '~/components/HistorieObrazky.vue'

export default {
  components: {
    NaseNabidkaObrazky,
    StahnoutKatalog,
    KavarnyObrazky,
    HistorieObrazky
  }
}
</script>

<style>
  section {
    margin: 0 0 2.5rem;
  }
  .nase-nabidka-text {
    margin-bottom: 5rem;
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
  .historie-text {
    padding-left: 1.7rem;
  }
  .historie-text img {
    margin-bottom: 4rem;
  }
  .historie-text h2,
  .historie-text p {
    margin-left: 5.8rem;
    margin-right: 5.8rem;
  }
  .historie-pravy-obrazek {
    padding-left: 5px;
  }
  .kontakt-text {
    margin-bottom: 5rem;
  }
</style>
