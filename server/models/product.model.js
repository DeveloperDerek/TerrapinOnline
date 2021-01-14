const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: String,
            required: true,
            default: 0
        },
        stock: {
            type: Number,
            required: true,
            default: 50
        },
        imageKey: {
            type: String
        },
    }, {timestamps: true}
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product;