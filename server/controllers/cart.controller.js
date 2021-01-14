const Cart = require("../models/cart.model");

module.exports = {
    async create(req, res) {
        const cart = new Cart({
            user: req.user._id
        })
        const newCart = await cart.save();
        res.status(201).json(newCart);
    },
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
        res.json(cart);
    }
}