// IMPORT CONTROLLER ==========>

const Pirate = require ("../controllers/pirates.controllers")

// !!!!! AlWAYS TEST ALL THE ROUTES 
// !! W/ VALIDATION 
// !!! BEFORE YOU EVER TOUCH THE CLIENT (REACT)


// !!!!  ROUTE  !!!! 

module.exports = (app) =>{

    app.get("/api/pirates", Pirate.findAll);  // ======> ROUTE GET ALL NOTES
    
    app.post("/api/pirates", Pirate.addPirate); //=======> route Create  New Notes
    
    app.get("/api/pirates/:id",Pirate.findOne); // route Get one Note by id 
    
    app.put("/api/pirates/:id/edit",Pirate.updatePirate); // =====> route updated Note by id
    
    app.delete("/api/pirates/:id/delete",Pirate.deletePirate); // =====> route delete Note by id 
    
    }