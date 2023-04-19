const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// display all the products
router.get('/products', async (req,res)=>{

    const products = await Product.find({});

    res.render('index',{products});
});

//creating new form to add items
router.get('/products/new',(req,res)=>{

    res.render('new');
});

//creating product in db
router.post('/products',async(req,res)=>{
    const {name,price,desc} = req.body;

    await Product.create({name,price,desc});


    res.redirect('/products');
});


router.get('/products/:productid',async(req,res)=>{

    const{productid} = req.params;

    const product = await Product.findById(productid);

    res.render('show',{product})
});


//render the edit form prefilled with the product data
router.get('/products/:productid/edit',async(req,res)=>{

    const {productid} = req.params;
    const product = await Product.findById(productid);

    res.render('edit',{product});
});


router.patch('/products/:productid',async(req,res)=>{

    const{productid} = req.params;

    const {name,price,desc} = req.body;

    await Product.findByIdAndUpdate(productid,{name,price,desc});

    res.redirect(`/products/${productid}`);
});

router.delete('/products/:productid',async(req,res)=>{
    const { productid} = req.params;

    await Product.findByIdAndDelete(productid);

    res.redirect('/products');
}); 
module.exports = router;