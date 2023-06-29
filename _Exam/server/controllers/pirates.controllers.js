//  ==========   FULL GRUD ==========   


// Import model ===========>

const Pirate = require ("../models/pirates.model")

// !!!!  READ ALL = GET ALL  !!!!! 

module.exports.findAll = (request,response) =>{
    Pirate.find().sort({name:1})
    .then((allDaPirates)=>{
        response.json(allDaPirates)  // [] !!!!! 
    })
    .catch(err=>response.json(err))
}


// !!!!  CREATE NEW NOTE  !!!!! 

module.exports.addPirate = (request,response) =>{
    Pirate.create(request.body) 
    .then((newPirate)=>{
        console.log("Pirate created Succefully")
        response.json(newPirate) 

    })
    .catch(err=> response.status(400).json(err))         
    // !!!!  zidna fiha satus (400) !!
}




// !!!!!  READ ONE === GET A SINGLE Product By _id  !!!!!!!

module.exports.findOne = (request,response) =>{
    Pirate.findById(request.params.id)
    
    .then((onePirate)=>{
        response.json(onePirate)  

    })
    .catch(err=>response.json(err))
}


// !!!!!  UPDATE ONE !!!!!!!


module.exports.updatePirate = (request,response) =>{
    Pirate.findByIdAndUpdate(request.params.id, request.body,{new:true, runValidators:true})
    
    .then((result)=>{
        response.json(result)  

    })
    .catch(err=>response.status(400).json(err))
}

// !!!!!  DELETE !!!!!!!

module.exports.deletePirate = (request,response) =>{
    Pirate.findByIdAndDelete(request.params.id)
    
    .then((result)=>{
        response.json({result:result})  

    })
    .catch(err=>response.json(err))
}