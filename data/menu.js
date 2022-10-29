const axios = require('axios');

const query = `
query GetProducts {
  products {
    id,
    title,
    thumbnail,
    price,
    available,
    category {
      id,
      title
    }
  }
}
`;

const URL = process.env.GRAPHQL_URL || 'http://localhost:3000/api/graphql';

const menu = {
  getProducts: () => axios.post(URL, { query })
};

module.exports = menu;
