const {
    createProduct,
    getProduct,
    getProductById
} = require('../repository/product.repository');

// POST
const createProductService = async (name, price, quantity, created_at, updated_at) => {
    return await createProduct(name, price, quantity, created_at, updated_at);
}

// GET
const getProductService = async () => {
    return await getProduct();
}

const getProductByIdService = async (id) => {
    return await getProductById(id);
}

module.exports = {
    createProductService,
    getProductService,
    getProductByIdService
}