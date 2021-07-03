const Products = require('../models/products.model');

const createProduct = (name, price, quantity, created_at, updated_at) => {
    let data = {
        name: name,
        price: price,
        quantity: quantity,
        created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updated_at: null,
    };
    return Products.query().insert(data);
}

const getProduct = () => {
    return Products.query();
}

const getProductById = (id) => {
    let getId = parseInt(id);
    return Products.query().findById(getId);
}

module.exports = {
    createProduct,
    getProduct,
    getProductById
}