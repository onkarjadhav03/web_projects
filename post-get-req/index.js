const exp = require('constants');
const express=require('express');
const app=express();
const path=require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middleware to parse the data
app.use(express.urlencoded({extended:true}));

//middleware used to parse json data 
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index');
})


app.get('/user',(req,res)=>{

    res.send('get request');
})


app.post('/user',(req,res)=>{

    console.log(req.body);
    res.send('post response');
})
app.listen(3000,()=>{
    console.log('server running port 3000');
})