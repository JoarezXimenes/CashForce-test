<template>
  <div
    v-for="(order, index) in orders"
    v-bind:key="index"
    class="tRows"
  >
    <div>{{ order.nNf }}</div>
    <div>{{ order.buyer.name }}</div>
    <div>{{ order.provider.name }}</div>
    <div>{{ formatDate(order.emissionDate) }}</div>
    <div class="money">{{ formatToMoney(order.value) }}</div>
    <div :class="'p'+order.orderStatusBuyer">{{ status[order.orderStatusBuyer] }}</div>
    <div><button>Dados do cedente</button></div>
  </div>
</template>

<script>

export default {
  name: 'OrdersTableRow',
  props: {
    orders: Array,
  },

  data() {
    return {
      status: [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado',
      ],
    };
  },

  methods: {
    formatToMoney(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
      });

      const toMoney = formatter.format(value);

      const formatedToReal = `${toMoney.slice(0, 2)} ${toMoney.slice(2)}`;

      return formatedToReal;
    },
    formatDate(date) {
      const formatedDate = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
      return formatedDate;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/OrdersView.scss';
</style>
