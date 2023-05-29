const express = require('express');
const{
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}
= require('../controllers/productController');


const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET a product by id
router.get('/:id', getProduct);

// POST a product
router.post('/', createProduct);

// PATCH a product
router.patch('/:id', updateProduct);

// DELETE a product
router.delete('/:id', deleteProduct);


module.exports = router;