const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
dotenv.config({path :'./config/config.env'});
// const PORT = 8000;
// const DB = "prodductsDb";
const PORT = process.env.PORT;
const DB = process.env.DB;
// app.use(cors());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({extends:true}));

require('./config/mongoose.config')(DB);
require('./routes/pirates.route')(app)
require('./routes/user.route')(app)


// this needs to be below the other code blocks
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );