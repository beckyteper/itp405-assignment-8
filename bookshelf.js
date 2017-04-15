var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var knexClient = require('knex/lib/client');
var origQuery = knexClient.prototype.query;
knexClient.prototype.query = function (connection, obj) {
  console.log(`SQL: ${obj.sql}`);
  return origQuery.apply(this, arguments);
};

module.exports = bookshelf;
