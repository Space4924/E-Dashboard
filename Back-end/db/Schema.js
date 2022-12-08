const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name:String,
    _class:Number,
    college:String,
    address:String
})
module.exports=mongoose.model('products',productSchema);