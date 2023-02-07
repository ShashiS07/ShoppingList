const mongoose = require('mongoose')

const vegetableSchema=new mongoose.Schema({
    name:{type:String},
    unit:{type:Number},
    price:{type:Number}
},{timestamps:true})

module.exports=mongoose.model("Vagetable",fruitSchema)