/* eslint-disable no-unused-vars */
const orderService = require('../services/orderService');

const orderController = {
  async getAllOrders(_req, res) {
    const orders = await orderService.getAllOrders();

    res.status(200).json(orders);
  },
};

module.exports = orderController;
