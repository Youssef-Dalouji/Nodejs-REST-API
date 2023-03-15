const ConnectDB=async()=>{
    const mongoose=require('mongoose')
    require('dotenv/config')
    mongoose.set("strictQuery", false)
    try{
        const conn=await mongoose.connect(process.env.DATA_BASE)
    }catch(error){
        console.log(error)
    }
}
module.exports={ConnectDB}
