const db = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['public'],
});

const menu = {
  getProducts: () => {
    return db.select(
      'category_id',
      'title',
      'tags',
      'price',
    )
      .table('products')
      .where({ available: true });
  }
};

module.exports = menu;
