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

export default {
  name: 'OrdersView',
  components: {
    'v-icon': OhVueIcon,
    OrdersTableRow,
  },
  data() {
    return {
      ordersFromDb: [
        {
          nNf: '18153',
          value: '198450',
          emissionDate: '2020-10-30T11:00:00-03:00',
          orderStatusBuyer: '3',
          buyer: {
            id: 1,
            name: 'SACADO 001',
          },
          provider: {
            id: 1,
            name: 'CEDENTE 002',
          },
        },
        {
          nNf: '18157',
          value: '168850',
          emissionDate: '2020-11-04T15:32:35-02:00',
          orderStatusBuyer: '0',
          buyer: {
            id: 1,
            name: 'SACADO 001',
          },
          provider: {
            id: 1,
            name: 'CEDENTE 002',
          },
        },
        {
          nNf: '18184',
          value: '222795',
          emissionDate: '2020-11-10',
          orderStatusBuyer: '7',
          buyer: {
            id: 1,
            name: 'SACADO 001',
          },
          provider: {
            id: 1,
            name: 'CEDENTE 002',
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/OrdersView.scss';
</style>
