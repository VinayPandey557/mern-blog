const express = require("express");
const cors = require('cors')
const { User, Post } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/register",async (req, res) => {
   const { username , password } = req.body;
   const response =  await User.create({ username , password});
   console.log(response);
    res.json({
        message: "User created successfully"
    })

})

app.listen(4000);