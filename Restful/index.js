const express=require('express');
const app=express();
const path=require('path');
const { v4: uuid } = require('uuid');
const methodOverride=require('method-override');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

let comments=[
    {
        id:uuid(),
        username:'onkar',
        text:'nice product'
    },
    {
        id:uuid(),
        username:'vishwas',
        text:'nice'
    },
    {
        id:uuid(),
        username:'aniket',
        text:'bakwasss'
    }
];


app.get('/',(req,res)=>{
    res.send('connected');
})


// list all the comments
app.get('/comments',(req,res)=>{
    res.render('index',{comments});
});

//get the form for mew comments
app.get('/comments/new',(req,res)=>{

    res.render('new');
});

//creating a new comment
app.post('/comments',(req,res)=>{
  const {username,text}=req.body;

  comments.push({username,text,id:uuid()});

    res.redirect('/comments');
});

//displaying a perticular comment
app.get('/comments/:commentid',(req,res)=>{
    
   const {commentid}=req.params;

   const foundcomment=comments.find((comment)=>comment.id===commentid);

    res.render('show',{comment:foundcomment});
});

//editing a comment
app.get('/comments/:commentid/edit',(req,res)=>{

    const {commentid}=req.params;

   const foundcomment=comments.find((comment)=>comment.id===commentid);

   res.render('edit',{comment:foundcomment});
    
});

//update comment 
app.patch('/comments/:commentid',(req,res)=>{
    const {commentid}=req.params;

   const foundcomment=comments.find((comment)=>comment.id===commentid);

    const {text}=req.body;
    foundcomment.text=text;

    res.redirect('/comments')
   
});


//delete a perticular comment
app.delete('/comments/:commentid',(req,res)=>{

    const{ commentid }=req.params;

    const newCommentaArray=comments.filter((comment)=>comment.id !== commentid);

    comments = newCommentaArray;

    res.redirect('/comments');
});


app.listen(8000,()=>{
    console.log('server running at port 8000');
})