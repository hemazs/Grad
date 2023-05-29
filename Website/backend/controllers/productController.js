const Product = require('../models/Product');
const mongoose = require('mongoose');

// GET all products
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        products
    });
};



// GET a product by id
const getProduct = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Product not found'});
    }
    const product = await Product.findById(id);

    if(!product) {
        res.status(404).json({error: 'Product not found'});
    }

    res.status(200).json({
        product
    });
};


// POST a product
const createProduct = async (req, res) => {
    const { name, description, price, allergens } = req.body;
    try {
        const product = await Product.create({
            name,
            description,
            price,
            allergens
        });
        res.status(200).json({
            product
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};



// PATCH a product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Product not found'});
    }
    const product = await Product.findOneAndUpdate({_id: id}, 
        {...req.body});

    if (!product) {
        res.status(404).json({error: 'Product not found'});
    }

    res.status(200).json({product});
};




// DELETE a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Product not found'});
    }

    const product = await Product.findOneAndDelete({_id: id});

    if (!product) {
        res.status(404).json({error: 'Product not found'});
    }

    res.status(200).json({product});
};




module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};