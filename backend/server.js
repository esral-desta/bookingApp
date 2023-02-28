const express = require("express")
require("dotenv").config()
const PORT =  8000
const app= express()
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const User = require("./models/user")

console.log(process.env.MONGO_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)

app.use(express.json())

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173/"
}))

// app.get("",(req,res)=>{
//     console.log("what is this");
//     res.json("this is what you got")
// })

app.get("/register",(req,res)=>{
    const {name,email,password} = req.body;
    User.create({name,email,password})
    res.json({name,email,password})
})

app.listen(PORT,(err)=>{
    console.log("server running on port ",PORT);
})
