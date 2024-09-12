const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const port = 3001;
const url = "mongodb://localhost:27017/mern";
const app = express()

app.use(cors())
//middleware to parse incoming req
app.use(express.json())
//connect db mongo
mongoose.connect(url, {})
.then(result => console.log("database connected!"))
.catch(err => console.log(err))

app.get("/getUser" , (req , res) => {
    UserModel.find({}).then((user)=>{
        res.json(user)
    }).catch((err)=> {
        res.json(err)
    })
})

app.post('/createUser' , async (req,res) => {

    const user = req.body;
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(user)
})

app.listen(port , ()=> {
    console.log(`server is running on port => ${port} .`)
})
