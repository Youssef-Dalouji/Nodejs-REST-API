const ConnectDB=async()=>{
    const mongoose=require('mongoose')
    require('dotenv/config')
    mongoose.set("strictQuery", false)
    try{
        const conn=await mongoose.connect(process.env.DATA_BASE)
        console.log('MongoDB Connected :'+ conn.connection.host)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
module.exports={ConnectDB}
