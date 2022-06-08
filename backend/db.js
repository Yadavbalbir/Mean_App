const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movieDB', (err)=>{
    if(!err){
        console.log("DB connection made successfully");
    }else{
        console.log("error in connection " + err)
    }
})

module.exports = mongoose;