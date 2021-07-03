const { json } = require('body-parser');
const { application } = require('express');
const {
    createProductService,
    getProductService,
    getProductByIdService
} = require('../services/product.service');

const post = async (req, res) => {
    const {
        name, price, quantity
    } = req.body;

    try {
        let products = await createProductService(
            name, price, quantity
        );
        res.json(
            {
                code: 200,
                status: "Successfully Added",
                data: products
            }
        );
    } catch (error) {
        res.json(
            {
                code: 500,
                status: error.message,
            }
        );
    }
}

const get = async (req, res) => {
    try {
        let products = await getProductService()
        res.json(
            {
                code: 200,
                status: "Success",
                data: products
            }
        );
    } catch (error) {
        res.json(
            {
                code: 500,
                status: error.message,
            }
        );
    }
}

const show = async (req, res, next) => {
    let getId = parseInt(req.params.id);
    try {

        let product = await getProductByIdService(getId);
        if (product == null) {
            res.json({
                code: 404,
                status: 'Not Found',
                data: 'Not Found'
            });
        }

        res.json({
            code: 200,
            status: 'Successful',
            data: product
        });
    } catch (error) {
        res.json({
            code: 400,
            status: error.message,
        });
    }
}
module.exports = {
    post,
    get,
    show
}