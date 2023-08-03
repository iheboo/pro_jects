const express = require('express')
const cors = require('cors')
const dbConfig = require('./config/dbConfig');
const mysql = require('mysql2/promise');

const app = express()

var corOption={
    origin: 'http://127.0.0.1:8081'
}
// create db if it doesn't already exist
const db_generate = async () =>{
    const { HOST, USER, PASSWORD, DB } = dbConfig;
    const connection = await mysql.createConnection({ HOST, USER, PASSWORD });
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB};`);
}
db_generate()
//ROUTES 
const router =require('./routes/productRoutes')
app.use('/api/products', router)

// middleware
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing api 
app.get('/',(req,res)=>{
    res.json({message :'hello from api'})
})

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})