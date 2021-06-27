const {
    createProductService
} = require('../services/product.service');

// POST
const post = async (req, res) => {
    const {
        name, price, quantity, created_at, updated_at
    } = req.body;

    try {
        let products = await createProductService(
            name, price, quantity, created_at, updated_at
        );
        res.json(
            {
                "code": 200,
                "message": "Successfully Added",
                "data": products
            }
        );
    } catch (error) {
        res.json(
            {
                "code": 500,
                "message": error.message,
            }
        );
    }
}

module.exports = {
    post
}