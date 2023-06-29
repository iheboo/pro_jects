const PirateController=require("../controllers/pirate.controller")
module.exports=(app)=>{
    app.get("/api/pirates",PirateController.findAll);
    app.post("/api/pirates",PirateController.create);
    app.get("/api/pirates/:id",PirateController.findOne);
    app.delete("/api/pirates/:id",PirateController.delete);
   
}