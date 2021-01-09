const Mongoose = require("mongoose");

const cartItemSchema = new Schema(
    {
        product: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        turtle: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Turtle"
        },
        tortoise: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Tortoise"
        },
        quantity: {
            type: Number
        },
        totalPrice: {
            type: Number
        },
        priceWithTax: {
            type: Number
        }
    }
);

module.exports = Mongoose.model("CartItem", cartItemSchema);

const cartSchema = new Schema(
    {
        products: [cartItemSchema],
        user: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, {timestamps: true}
)

module.exports = Mongoose.model("Cart", cartSchema);