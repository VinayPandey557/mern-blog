const express = require("express");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const cors = require('cors')
const { User, Post } = require("./db");
const app = express();
app.use(cors());
app.use(express.json());

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


if(!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variable")
}

app.post("/register",async (req, res) => {
   const { username , password } = req.body;
   const response =  await User.create({
     username ,
     password:bcrypt.hashSync(password, salt),
    });
   console.log(response);
    res.json({
        message: "User created successfully"
    })

})
 

app.post("/login", async (req, res) => {
    const { username , password } = req.body;
    const response = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, response.password);
    if(passOk) {
       const token =  jwt.sign({username, id:response._id}, JWT_SECRET, { expiresIn : "1h"})
    res.json({
        token
    })
  } else {
    return res.status(400).json({
        message: "Invalid credentials"
      })
  }
})

app.listen(4000);