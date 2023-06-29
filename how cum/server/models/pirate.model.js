const mongoose=require("mongoose")

const PirateSchema = new mongoose.Schema({
     name: {
        type: String,
        required: [true, "Name is required"]
    },
    imageUrl: {
        type: String,
        required: [true, "imageurl is required"]
    },
    position: {
        type: String,
        required: [true, "position is required"]
    },
    catchFrase : {
        type: String,
        required: [true, "Frase  is required"]
    },
    cheetTreasureNumbre: {
        type: Number,
        required: [true, "Pages is required"],
        min: [0, "minimum of pages must be equal or greater than 0 "]
        
    },
    isPegLeg: {
        type: Boolean,
        required: [true, "Pegleg is required"],
       
    },
    isHookHand: {
        type: Boolean,
        required: [true, "HookHand is required"],
       
    },
    isEyePatch: {
        type: Boolean,
        required: [true, "EyePatch is required"],
       
    }
}, { timestamps: true })

const Pirate=mongoose.model("Pirate",PirateSchema)
module.exports=Pirate;
 

