// router.post('/query',middlewareProtect,async (req,res)=>{
//     const {idUser}=req.user
//     // console.log(address.ip())
//     // console.log(address.ipv6())
//     // address.mac(function (err, addr) {
//     //     console.log(addr)
//     // });
//     // console.log(require("os").userInfo())
//     try{
//         const findRoom=await modelRoomChat.findOne({idUser:idUser})
//         if(findRoom){
//             res.status(200).json(findRoom)
//         }else{
//             res.status(404).json([{message:'Not Found'}])
//         }
//     }catch(err){
//         res.status(404).json([{message:'Not Found',Error:err}])
//     }
// })
//const address = require('address');