const express=require("express")
const app=express();
const PORT=5000;
const DB="pirate_db"
const cors=require("cors")
app.use(cors())
app.use(express.json(),express.urlencoded({extended:true}));

require("./config/mongoose.config")(DB)
require("./routes/routes")(app)

app.listen(PORT,()=>{console.log("SERVER IS RUNING LES AMOURS ")})