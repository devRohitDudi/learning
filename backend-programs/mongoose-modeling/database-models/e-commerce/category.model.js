import mongoose from "mongoose";

const categorySchema =new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50
        },
        tags:{
            type: [String],
            trim: true,
            minlength: 3,
            maxlength: 50
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 500
        },
    },{ timestamps: true });

    export const Category = mongoose.model("Category", categorySchema);