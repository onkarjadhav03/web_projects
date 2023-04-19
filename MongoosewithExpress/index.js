const express = require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const seeddb = require('./seed');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


// routs 

const productrouts = require('./routs/productrout');


mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(err);
})


// seed the db with dummy products

// seeddb();

app.get('/',(req,res)=>{
    res.send('connected');
});

app.use(productrouts);


app.listen(3000,()=>{
    console.log('server started at port 3000');
})
