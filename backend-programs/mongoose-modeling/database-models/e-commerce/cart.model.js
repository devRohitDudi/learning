import mongoose from "mongoose";

const cartSchema =new mongoose.Schema(
    {
        productId:{
            type:String,
            required:true,
            minlength:3,
            maxlength:50
        },

    },{ timestamps: true });

    export const Cart = mongoose.model("Cart",cartSchema)