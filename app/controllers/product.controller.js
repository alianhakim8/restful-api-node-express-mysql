const {
    createProductService
} = require('../services/product.service');

// POST
const post = async (req, res) => {
    const {
        name, price, quantity
    } = req.body;

    console.log(res);

    try {
        let products = await createProductService(
            name, price, quantity
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