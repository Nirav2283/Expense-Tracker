import mongoose from "mongoose";
const productSchema = mongoose.Schema({
   id:{
    type:Number,
    required:true
   },
   name:{
    type:String,
    required:true
   },
   image:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   description:{
      type:String,
      required:true
   },
   date:{
      type:Date,
      required:true
   }
})

const Product = mongoose.model("Product" , productSchema);
export default Product