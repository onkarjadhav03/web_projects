const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log(' DB connected')
})
.catch((err)=>{
    console.log(err);
});


const products = [
    {
        name: 'Iphone 11',
        img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 300,
        desc:"The iPhone is one of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market. The iPhone has generated large profits for Apple, making it one of the world's most valuable publicly traded companies."
    },
    {
        name: 'Reebok Shoes',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 100,
        desc:"Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. "
    },
    {
        name: 'Fossil Watch',
        img: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 150,
        desc:"Fossil Group, Inc., is an American fashion designer and manufacturer founded in 1984 by Tom Kartsotis and based in Richardson, Texas."
    },
    {
        name: 'Macbook',
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 350,
        desc:"The iPhone is one of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market. The iPhone has generated large profits for Apple, making it one of the world's most valuable publicly traded companies."
    },
    {
        name: 'Drones',
        img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 450,
        desc:"An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot, crew, or passengers on board."
    },
    {
        name: 'More Drones',
        img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 450,
        desc:"An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot, crew, or passengers on board."
    },
    {
        name: 'Bicycle',
        img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 80,
        desc:"A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle"
    }
];
Product.insertMany(products)
.then(()=>{
    console.log('product seeded');

});