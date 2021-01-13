const Product = require("../models/product.model");

module.exports = {
    create(req, res) {
        Product.create(req.body)
            .then((product) => res.json(product))
            .catch((err) => res.status(400).json(err))
    },
    findOne(req, res) {
        Product.findById({ _id: req.params.id})
            .then((product) => res.json(product))
            .catch((err) => res.status(400).json(err))
    },
    findAll(req, res) {
        Product.find()
            .then((product) => res.json(product))
            .catch((err) => res.status(400).json(err))
    },
    findTurtles(req, res) {
        Product.find({ category: turtle }).sort({ title: 1 })
            .then((product) => res.json(product))
            .catch((err) => res.status(400).json(err))
    },
    findTortoises(req, res) {
        Product.find({ category: tortoise }).sort({ title: 1 })
            .then((product) => res.json(product))
            .catch((err) => res.status(400).json(err))
    },
    update(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' })
            .then((updated) => res.json(updated))
            .catch((err) => res.status(400).json(err));
    },
    delete(req, res) {
        Product.findOneAndDelete({_id: req.params.id})
            .then(product => res.json(product))
            .catch(err => res.status(400).json(err))
    }
}