// Import mongoose to build a model ===========>

const mongoose = require('mongoose');

// The Schema

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} must be more than 3 characters"]
    },

    image: {
        type: String,
        required: [true, "{PATH} must be present"],
        // minLength: [10, "{PATH} must be more than 10 characters"]
       
        // min :0,
        // max :1000
    },
    treasure:{
        type: Number,
        required : [true, "{PATH} must be present🆎🆎🆎"],
        min :0,

    },

    piratecatch:{
        type: String,
        required: [true, "{PATH} must be present"],
    },

    crewposition:{
        type: String,
        required: [true, "{PATH} must be present"]
    },
    
    pegleg: {
        type: Boolean,
        default: true
    
    },
    eyepatch: {
        type: Boolean,
        default: true
    
    },
    hookhand: {
        type: Boolean,
        default: true
    
    }


}, { timestamps: true })


// Create The Schema and export it ============>

const Pirate = mongoose.model('Pirate', PirateSchema);


// Export the mongoose model =============>

module.exports = Pirate;