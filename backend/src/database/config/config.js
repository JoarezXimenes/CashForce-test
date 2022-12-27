require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER|| 'sql_user',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'cashforce_v3',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mariadb',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};