const mongoose=require('mongoose');


//db connection
mongoose.connect('mongodb://localhost:27017/myapp')
 .then(()=>{
    console.log('connection open');
 })
 .catch((err)=>{
    console.log('something went wrong');
    console.log(err);
 })