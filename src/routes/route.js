const express= require('express')
const router=express.Router()




router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:"Invalid http Request"})
})


module.exports=router