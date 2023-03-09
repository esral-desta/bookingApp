const express = require("express")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const PORT =  8000
const app= express()

var cors = require('cors');
var corsOptions = {
    origin: true,
    credentials: true };

app.use(cors(corsOptions));

require("dotenv").config()
const { default: mongoose } = require("mongoose")
const User = require("./models/user")

console.log(process.env.MONGO_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(require("cookie-parser")())

var salt = bcrypt.genSaltSync(10);

app.use((req,res,next)=>{
    console.log(req.path);
    next()
})

app.post("/login",async (req,res)=>{
    // console.log("login got called");
    const {email,password} =  req.body
    const userDoc = await User.findOne({email})
    console.log(userDoc);
    if(userDoc){
        const passOk=  bcrypt.compare(password,userDoc.password)
        // console.log("passOk "+ passOk);
      if (passOk){
            jwt.sign({email:userDoc.email,id:userDoc._id},process.env.JWTSECRET,{},(err,token)=>{
                // console.log("token" + token);
                // console.log("err" + err);
                res.cookie("token",token).json({"id":userDoc._id,"name":userDoc.name,"email":userDoc.email})
            })                        
        }else{
            res.status(422).json("incorrect password ")
        }
    }
    else{
        res.json("not Found")
    }
})
app.get("/profile", async (req,res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token,process.env.JWTSECRET,{},async (err,user)=>{
            if (err) throw err;
            const email = user.email
            // console.log(email);
            user = await User.findOne({email})
            // console.log(user);
            // console.log(user._id);
            res.json({"id":user._id,"name":user.name,"email":user.email})
        })
    }
    else{
        res.json({"message":"no token"})
    }

})
app.post("/register",async (req,res)=>{
    const {name,email,password} = req.body;
    const userDoc = await User.create({name,email,password:bcrypt.hashSync(salt)})
    // res.json(userDoc)
    res.json({"message":userDoc})
})


app.post("/logout",(req,res)=>{

    res.cookie("token","").json(true);
})



app.listen(PORT,(err)=>{
    console.log("server running on port ",PORT);
})


























// app.use(cors({
//     credentials:false,
//     origin:"http://localhost:5173/"
// }))

// app.get("",(req,res)=>{
//     console.log("what is this");
//     res.json("this is what you got")
// })
