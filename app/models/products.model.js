const { Model } = require('objection');

const knex = require('../config/knex');

Model.knex(knex);

class Products extends Model {
    static get tableName() {
        return 'products';
    }
}

module.exports = Products;