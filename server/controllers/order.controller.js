const Order = require('../models/order.model');
const Cart = require('../models/cart.model');

module.exports = {
    // @desc    Create new order
    // @route   POST /api/orders
    // @access  Private
    async createOrder (req, res) {
        const {
            cart,
            shippingAddress,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body
        
        const newOrder = new Order({
            user: req.user._id,
            cart,
            shippingAddress,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await newOrder.save();

        const clearCart = await Cart.updateOne(
            { _id: cart }, 
            { $unset: {
                user: ""
            }},
            { upsert: true, new: true}
        )
        res.status(201).json(clearCart);
    },
    // @desc    Get all orders
    // @route   GET /api/orders
    // @access  Private/Admin
    async getOrders (req, res) {
        const orders = await Order.find({user: req.user._id}).populate("cart")
        res.json(orders)
    }
}
