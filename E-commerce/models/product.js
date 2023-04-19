const mongoose = require('mongoose');
const Review = require('./review');



const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    img:{
        type:String,
        trin:true,
        default:'/images/products.jpg'
    },
    price:{
        type:Number,
        min:0,
        default:0
    },
    desc:{
        type:String,
        trim:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});




//mongoose middleware fun to delete all the associate reviews on a product
productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id:{$in:product.reviews}});
    }
});
const product = mongoose.model('Product',productSchema);
module.exports= product;