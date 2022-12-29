const { Order, Buyer, Provider } = require('../database/models');

const orderService = {
  async getAllOrders() {
    const orders = await Order.findAll({
      attributes: ['nNf', 'value', 'emissionDate', 'orderStatusBuyer'],
      include: [
        { model: Buyer, as: 'buyer', attributes: ['id', 'name'] },
        { model: Provider, as: 'provider', attributes: ['id', 'name'] },
      ],
    });

    return orders;
  },
};

module.exports = orderService;
