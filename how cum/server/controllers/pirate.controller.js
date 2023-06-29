const Pirate=require("../models/pirate.model")
// Read all
module.exports.findAll = (req,res)=>{
    Pirate.find().then(allPirates=>{
        console.log("All Pirates Found : ", allPirates);
        res.json(allPirates)
    }).catch(err=>{
        console.log("Error", err);
        res.json(err)
    })
}

// create new 
module.exports.create = (req,res)=>{
    Pirate.create(req.body)
    .then((newPirate)=>{
        console.log("SERVER SUCCESS (CREATE)✅✅");
        res.json(newPirate)
    })
    .catch((err)=>{
        console.log("----------",err);
        return res.status(400).json(err)
    })
}

// READ ONLY ONE 
module.exports.findOne = (req,res)=>{
    
    Pirate.findById(req.params.id)
    .then((onePirate)=>{
        // console.log(" Pirate Found : ", onePirate);
        res.json(onePirate)
    }).catch(err=>{
        console.log("Error", err);
        res.json(err)
    })
}

// DELETE
module.exports.delete = (req,res)=>{
    // console.log(req.body)
    Pirate.findByIdAndDelete(req.params.id)
    .then((result)=>{
        console.log("SERVER SUCCESS (DELETE)✅✅");
        res.json(result)
    })
    .catch(err=>{
        console.log("SERVER ERROR (DELETE) ❌❌❌");
        res.json(err)
    })
}
