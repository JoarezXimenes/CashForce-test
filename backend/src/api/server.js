/* eslint-disable no-console */
require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.status(200).json({ message: 'OK' });
});

app.listen(port, () => console.log('ouvindo porta', port));
