const express=require('express');
const app=express();

// app.use((req,res)=>{
    // console.log('you made a request');

    //res.send('you made a request successfully');
//     res.send('<h1>YOU MADE REQUESR</h1>');
// })

app.get('/',(req,res)=>{
    res.send('home rout');
})
app.get('/cat',(req,res)=>{
    res.send('<h1>meeeooowwwww</h1>');
})


//put * at the end 
app.get('*',(req,res)=>{
    res.send('you are sequesting the wrong url');
})


app.listen(3000,()=>{  //listen takes 2 parameters port no and call back function 
    console.log('server running at port 3000');
})