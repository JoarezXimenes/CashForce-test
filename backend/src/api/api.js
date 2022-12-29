const express = require('express');
require('express-async-errors');
const cors = require('cors');

const ordersRouter = require('../routes/orders.routes');
const errorMiddleware = require('../middlewares/errorMiddleware');

// ...

const app = express();
app.use(cors());
app.use(express.json());

app.use(ordersRouter);

// ...

app.use(errorMiddleware);

module.exports = app;
