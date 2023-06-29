const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {secret} = require('../config/jwt.config.js');
module.exports = {

    register: (req, res) => {
        User.create(req.body)
          .then(user => {const userToken = jwt.sign({id: user._id , name : user.firstName}, secret); // Access the secret key from environment variables

              res.cookie("usertoken", userToken).json({ msg: "success registration!", user: user });
              console.log(userToken)
          })
          .catch(err => res.status(400).json(err.errors));
      },

    login: async (req, res)=>{
        const userFromDB = await User.findOne({email:req.body.email});
        if(!userFromDB){
            res.status(400).json({ error: "invalid login attempt" })
        } 
        else{
            try 
            {
                const isPasswordValid = await bcrypt.compare(req.body.password, userFromDB.password)
                if(isPasswordValid){
                    const userToken= jwt.sign({id:userFromDB._id}, secret)
                    console.log("Login User Token: " + userToken,"-------------------");
                    res.status(201).cookie("userToken", userToken ,{ sameSite: "none", secure: true }).json({userFromDB, message:'Login succesful',userToken:userToken})
                }
            }catch(error){res.status(400).json(error.errors)}
        }
    },

    logout: (req, res) => {
        res.clearCookie('userToken');
        res.json({ msg: "logout!" });
    },
    getLoggedUser : async (req, res) =>{
        req.cookies.userToken
        jwt.verify(req.cookies.userToken, secret)
        res.json( {successMessage: "User loggedIn working..."} )
    }

}
