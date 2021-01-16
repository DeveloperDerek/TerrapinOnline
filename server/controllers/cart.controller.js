const Cart = require("../models/cart.model");

module.exports = {
    async addToCart(req, res) {
        const userCart = await Cart.findOneAndUpdate(
            { user: req.user._id} ,
            { $addToSet: 
                {cartItems:{
                    product: req.body.product_id,
                    price: req.body.price,
                    quantity: req.body.quantity
                }} 
            },
            { upsert: true, new: true}
        )
        return res.json(userCart)
    },
    async viewCart(req, res) {
        const cart = await Cart.findOne({user: req.user._id})
            .populate('cartItems.product')
            // // .populate lets you reference documents in other collections
        if (cart === null) {
            const newCart = new Cart({
                user: req.user._id
            })
            const sendCart = await newCart.save();
            res.status(201).json(sendCart);
        } else {
            res.json(cart)
        }
    }
}