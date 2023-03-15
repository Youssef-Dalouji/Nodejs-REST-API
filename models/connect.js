const mongoose=require('mongoose')
require('dotenv/config')
mongoose.set("strictQuery", false)
const ConnectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.DATA_BASE,{useNewUrlParser: true,useUnifiedTopology:true})
        console.log('MongoDB Connected :'+conn.connection.host)
    }catch(error){
        console.log(error)
        process.exit(-1)
    }
}
module.exports={ConnectDB}
