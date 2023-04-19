const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session  = require ('express-session');
const flash=require('connect-flash');
const passport= require('passport');
const LocalStratergy = require('passport-local');
const User = require('./models/user');


mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log(' DB connected')
})
.catch((err)=>{
    console.log(err);
});

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));



const sessionConfig={
    secret:'weneedbettersecrets',
    resave:false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        expires:Date.now() +1000*60*60*24*7*1,//one weeek(milisec*sec*min*hrs*days*week)
        maxAge:1000*60*60*24*7*1
    }
}

  
app.use(session(sessionConfig));
app.use(flash());

//initializing middleware for passwords
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//telling psddport to check for udernsme snd passeord using authenticate method provieded by mongoose local package
passport.use(new LocalStratergy(User.authenticate()));


app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

//Routs
const productRouts = require('./routs/product');
const reviewRouts = require('./routs/review');
const authRoutes= require('./routs/auth');
const cartRoutes = require('./routs/cart');

app.use(productRouts);
app.use(reviewRouts);                           
app.use(authRoutes);
app.use(cartRoutes);
const port = 5000;

app.listen(port,()=>{
    console.log(`server runnin at port${port}`);
})