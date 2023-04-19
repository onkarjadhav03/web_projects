const express=require('express');
const app=express();
const path=require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

    res.render('index')
})

app.get('/random',(req,res)=>{
    res.render('random');
})


const todo=['go to gym','study'];

app.get('/todo',(req,res)=>{
    res.render('todo',{todo});
})
app.listen(8000,()=>{
    console.log('server running at port 8000');
})