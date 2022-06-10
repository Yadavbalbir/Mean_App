const mongoose = require('mongoose');

const movie = mongoose.model('movie',{
    title : {type:String},
    desc : {type:String},
    rating: {type:String},
    duration: {type:String},
    genre: {type:String},
    likes: {type:String},
    language: {type:String},
    watched: {type: String}

})

module.exports = movie;