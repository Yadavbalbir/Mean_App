const express = require('express');
const router = express.Router( );

const objectId = require('mongoose').Types.ObjectId
const movie = require('../models/movie.js')


// GET, POST, PUT, Delete

// Base path: http://localhost:3000/movie

//Get api
router.get('/', (req,res)=>{
    movie.find((err,doc)=>{
        if(err){
            console.log("error in getting the data")
        }else{
            res.send(doc);
        }
    })
})

//Get Single movie api
router.get('/:id', (req,res)=>{

    if(objectId.isValid(req.params.id)){
        movie.findById(req.params.id, (err,doc)=>{
             if(err){
                console.log("error in getting single movie ")
                }else{
                    res.send(doc)
                }
        })
    }else{
        return res.status(400).send("No record found with Id"+ req.params.id)
    }

})

//post api
router.post('/', (req, res)=>{
    let mv = new movie({
        title : req.body.title,
        desc :req.body.desc,
        rating: req.body.rating,
        duration: req.body.duration,
        genre: req.body.genre,
        likes: req.body.likes,
        language: req.body.language
    });
    mv.save((err, doc)=>{
        if(err){
            console.log("error in post data");
        }else{
            res.send(doc);
        }
    })
})

//put api
router.put('/:id', (req,res)=>{

    if(objectId.isValid(req.params.id)){

         let mv ={
        title : req.body.title,
        desc :req.body.desc,
        rating: req.body.rating,
        duration: req.body.duration,
        genre: req.body.genre,
        likes: req.body.likes,
        language: req.body.language
    };

        movie.findByIdAndUpdate(req.params.id, {$set: mv}, {new: true}, (err,doc)=>{
             if(err){
                console.log("error in deleting single movie ")
                }else{
                    res.send(doc)
                }
        })
    }else{
        return res.status(400).send("No record found with Id"+ req.params.id)
    }

})

// Delete Api 
router.delete('/:id', (req,res)=>{

    if(objectId.isValid(req.params.id)){
        movie.findByIdAndRemove(req.params.id, (err,doc)=>{
             if(err){
                console.log("error in deleting single movie ")
                }else{
                    res.send(doc)
                }
        })
    }else{
        return res.status(400).send("No record found with Id"+ req.params.id)
    }

})


module.exports = router;