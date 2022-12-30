<template>
  <nav >
    <div class="logo">
      <img  src="../assets/cashforce_logo.svg" alt="Cashforce logo">
    </div>
    <div id="navlinks">
      <router-link to="/">
      <v-icon scale="1.5" name="fa-regular-handshake"/>
      <p>Notas fiscais</p>
    </router-link>
    <router-link to="/about">
      <v-icon speed="slow" scale="1.5" name="bi-gear-fill" animation="wrench" hover/>
      <p>Configurações</p>
    </router-link>
    </div>
  </nav>
</template>

<script>
import { OhVueIcon } from 'oh-vue-icons';

export default {
  name: 'NavBar',
  components: {
    'v-icon': OhVueIcon,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/NavBar.scss';
</style>
