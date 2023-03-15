const express=require('express')
const helmet = require("helmet");
const cors =require('cors')
const { ConnectDB } = require('./models/connect')
const app=express()
const userRegister=require('./router/userRegistre')
const userInfo=require('./router/userInfo')
const getMe=require('./router/getMe')
const room=require('./router/room')
const userChat=require('./router/userChat')
const mongoose=require('mongoose')
mongoose.set("strictQuery", false)
require('dotenv/config')
// Middleware Technique
const ConnectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.DATA_BASE,{useNewUrlParser: true,useUnifiedTopology:true})
        console.log('MongoDB Connected :'+conn.connection.host)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
app.use(express.json())
app.use(cors())
app.use(helmet())
//Middleware Router
app.use('/userRegistre1923',userRegister)
app.use('/userinfo',userInfo)
app.use('/CO-7520-135',getMe)
app.use('/room',room)
app.use('/M-1351919175',userChat)
// Connect with database + Running Serveur
ConnectDB().then(()=>{
    app.listen(process.env.PORT || 3000,(err)=>{
        if(!err){
            console.log("Serveur Lance en port "+process.env.PORT)
        }else{
            console.log("Problem Lancement de serveur Error : "+err)
        }
    })
})


