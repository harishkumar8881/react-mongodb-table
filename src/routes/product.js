const express = require('express');
const router = express.Router();
const shortId = require('shortid');
const Product = require('../models/product');
const path = require("path");


router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

router.post('/products', async (req, res) => {
    const file = req.files.productImage;
    const shortid = shortId.generate();
    const filepath = (shortid + '--' + file.name);
    file.mv("src/uploads/" + filepath);

    const product = new Product(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            productImage: filepath,
        }
    )

    product.save((error, product) => {
        res.status(200).json(product);
    });

});

module.exports = router;