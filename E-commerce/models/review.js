const mongoose = require('mongoose');


const  reviewSchema = ({
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
        type:String,
        trim:true
    }
});


const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;