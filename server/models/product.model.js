const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        category: {
            type: String
        },
        quantity: {
            type: Number
        }
    }, {timestamps: true}
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

