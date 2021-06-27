const Products = require('../models/products.model');

const createProduct = (name, price, quantity, created_at, updated_at) => {
    let data = {
        name: name,
        price: price,
        quantity: quantity,
        created_at: created_at,
        updated_at: null
    };
    return Products.query().insert(data);
}

module.exports = {
    createProduct
}