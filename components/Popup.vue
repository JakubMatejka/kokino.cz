<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="popup">
      <p>Vážení zákazníci, z&nbsp;důvodu rodičovské dovolené je provoz Kokina omezen. Prosíme Vás proto, abyste, bude-li to jen trochu možné, objednávali s&nbsp;dostatečným předstihem. Kapacitu máme momentálně omezenou.</p>
      <p>Děkujeme Vám za pochopení. Krásný den.<br /> Kokino</p>
      <div class="close">
        <img class="close-img" src="/images/close-icon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.popup {
  text-align: center;
  background-color: white;
  height: 280px;
  width: 500px;
  margin: 10% auto 0;
  padding: 20px 30px;
  border-radius: 3px;
  font-weight: bold;
  position: relative;
  text-align: left;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

</style>
