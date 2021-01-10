const Order = require('../models/order.model');

module.exports = {
    // @desc    Create new order
    // @route   POST /api/orders
    // @access  Private
    async createOrder (req, res) {
        const {
            orderItems,
            shippingAddress,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body
        
        const newOrder = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await newOrder.save();

        res.status(201).json(createdOrder);
    },
    // @desc    Get all orders
    // @route   GET /api/orders
    // @access  Private/Admin
    async getOrders (req, res) {
        const orders = await Order.find({user: req.user._id})
        res.json(orders)
    }
}
