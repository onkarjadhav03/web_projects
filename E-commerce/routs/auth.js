const express= require('express');
const router = express.Router();
const User=require('../models/user');
const passport = require('passport'); 


router.get('/register',(req,res)=>{

    res.render('auth/signup');
});


router.post('/register',async(req,res)=>{

try{
    const{username,password,email,role}=req.body;
    const user = new User({username , email,role});
    const newUser= await User.register(user,password);

    req.login(newUser, function(err) {
        if (err)
         {
             return next(err); 
        }
        req.flash('success','registered successfully welcome');
        return res.redirect('/products');
      });
}
catch(err){
    req.flash('error',err.message);
    res.redirect('/products');
}
});


router.get('/login',(req,res)=>{
    
    res.render('auth/login');
});


router.post('/login',passport.authenticate('local',{
    failureRedirect:'/login',
    failureFlash:true
}),(req,res)=>{

  

   req.flash('success',`welcome back ${req.user.username}`);
  
   res.redirect('/products');
    
});


router.get('/logout',(req,res)=>{

    req.logout(function(err){
        if(err){
            console.log('error');
            }
   
   
    req.flash('success', 'goodbyeee!!!');
    console.log('logged out');
    res.redirect('/products');
});
    
});
module.exports=router;