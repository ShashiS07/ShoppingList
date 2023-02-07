const mongoose = require('mongoose')

const fruitSchema=new mongoose.Schema({
    name:{type:String},
    unit:{type:Number},
    price:{type:Number}
},{timestamps:true})

module.exports=mongoose.model("Fruit",fruitSchema)