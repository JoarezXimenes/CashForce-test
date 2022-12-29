const { Router } = require('express');
const orderController = require('../controllers/orderController');

const ordersRouter = Router();

ordersRouter.get('/orders', orderController.getAllOrders);

module.exports = ordersRouter;
