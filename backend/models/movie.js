const mongoose = require('mongoose');

const movie = mongoose.model('movie',{
    name : {type:String},
    position : {type:String},
    department: {type:String}

})

module.exports = movie;