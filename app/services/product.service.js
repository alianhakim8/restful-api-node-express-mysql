const {
    createProduct
} = require('../repository/product.repository');

// POST
const createProductService = async (name, price, quantity, created_at, updated_at) => {
    let product = await createProduct(name, price, quantity, created_at, updated_at);
    return product;
}

module.exports = {
    createProductService
}