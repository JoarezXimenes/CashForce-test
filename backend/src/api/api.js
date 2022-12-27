const express = require('express');
require('express-async-errors');

const errorMiddleware = require('../middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

// ...

app.use(errorMiddleware);

module.exports = app;
