const mongoose = require('mongoose');
const Product = require('./models/product');

const Dummyproducts = [
    {
        name:'Iphone',
        price:100,
        desc:"The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system."
    },
    {
        name:'Macbook Air',
        price: 200,
        desc:"The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system."
    },
    {
        name:'Apple Watch Series-6',
        price:150,
        desc:"The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system."
    },
    {
        name:'Reebok shoes',
        price:80.40,
        desc:"The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system."
    },
    {
        name:'Jeans',
        price:20.40,
        desc:"The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system."
    },
];


async function seeddb(){
   await Product.insertMany(Dummyproducts);
   console.log('DB seeded');
} 

module.exports = seeddb;