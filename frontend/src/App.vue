<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import './assets/scss/App.scss';

</style>
