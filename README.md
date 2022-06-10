# MEAN_App

## File Structure 
<img src="./Screenshots/file_structure.png">

## Main Page
<img src="./Screenshots/mainpage.png">

### I have implemented these methods
    - GET
    - POST
    - PUT
    - DELETE

### GET API
```JavaScript

    router.get('/', (req,res)=>{
    movie.find((err,doc)=>{
        if(err){
            console.log("error in getting the data")
        }else{
            res.send(doc);
        }
    })
})
```