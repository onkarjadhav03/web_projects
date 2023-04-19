const mongoose = require('mongoose');


//connecting with the database
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>console.log('connection open'))
.catch((err)=>console.log(err));




//schema maps the document comming from the db into usable js object
const movieSchema = new mongoose.Schema({

    name: String,
    year: Number,
    rating: Number,
    iswatched: Boolean

});


//schema can also be written as
// const movieSchema = new mongoose.Schema({

//     name: {
//         type:String,
//         required:true,
//          maxlength:30
//     },
        // year:{
        //     type:Number,
        //     min:[1995,'year should not be less then 1995'],
        //     max:2000
        // },
//     rating:{
//         type:Number,
//         min:0,
//         max:10
//     },
//     iswatched:{
//         type:Boolean,
//         default:false
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     }
// })


const Movie = mongoose.model('Movie',movieSchema);

const ironman = new Movie({name:'Ironman',year:2010,rating:8.9,iswatched:true});

// ironman.save()
// .then((m)=>{
//     console.log(m)
//     console.log('saved')
// })
// .catch((err)=>{
//     console.log(err)
// })


const Dummymovies = [{
    name:'superman',
    year:2008,
    rating:7.8,
    iswatched:false
},
{
    name:'spiderman',
    year:2015,
    rating:8,
    iswatched:false
},{
    name:'batman',
    year:2006,
    rating:7,
    iswatched:true
},
{
    name:'wonder women',
    year:2017,
    rating:9,
    iswatched:true,
}
];


// Movie.insertMany(Dummymovies)
// .then((movies)=>{
//     console.log(movies);
// })
// .catch((err)=>{
//     console.log(err);
// })



Movie.create({
    name:'captain america',
    year:2020,
    rating:6,
    iswatched:false
})
.then((m)=>{
    console.log(m);
    console.log('saved');
})
.catch((err)=>{
    console.log(err);
})