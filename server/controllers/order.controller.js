const Order = require('../models/order.model');

module.exports = {
    // @desc    Create new order
    // @route   POST /api/orders
    // @access  Private
    async addOrderItems (req, res) {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body

        if (orderItems && orderItems.length === 0) {
            res.status(400)
            throw new Error('No order items')
            return
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            })
        
            const createdOrder = await order.save()
        
            res.status(201).json(createdOrder)
        }
    },
    // @desc    Get all orders
    // @route   GET /api/orders
    // @access  Private/Admin
    async getOrders (req, res) {
        const orders = await Order.find({}).populate('user') // .populate lets you reference documents in other collections
        res.json(orders)
    }
}