<template>
  <div class="orders-view">
    <header/>
    <h1><v-icon scale="1.5" name="fa-regular-handshake"/>Notas fiscais</h1>
    <p>Visualize as notas fiscais que você tem.</p>
    <div id="orders-list">
      <div id="thead">
        <div>NOTA FISCAL</div>
        <div>SACADO</div>
        <div>CEDENTE</div>
        <div>EMISSÃO</div>
        <div>VALOR</div>
        <div>STATUS</div>
        <div></div>
      </div>
      <OrdersTableRow
        :orders=ordersFromDb
      />
    </div>
  </div>
</template>

<script>
import { OhVueIcon } from 'oh-vue-icons';
import OrdersTableRow from '@/components/OrdersTableRow.vue';
import requests from '@/services/requests';

export default {
  name: 'OrdersView',
  components: {
    'v-icon': OhVueIcon,
    OrdersTableRow,
  },
  data() {
    return {
      ordersFromDb: [],
    };
  },
  created() {
    const getOrders = async () => {
      const orders = await requests.getAllOrders();
      console.log(orders);
      this.ordersFromDb = orders;
    };
    getOrders();
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/OrdersView.scss';
</style>
