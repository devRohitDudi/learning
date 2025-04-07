 import mongoose from "monoose";
 
 const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:50
        },
        description:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:500
        },
        price:{
            type:Number,
            required:true,
            min:0
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true
        },
        stock:{
            type:Number,
            required:true,
            min:0
        },
        imageUrl:{
            type:String,
            required:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }

 },{timestamps:true});

 export const Product = mongoose.model("Product",productSchema);