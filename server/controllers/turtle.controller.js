const Turtle = require("../models/turtle.model");

module.exports = {
    create(req, res) {
        Turtle.create(req.body)
            .then((turt) => res.json(turt))
            .catch((err) => res.status(400).json(err))
    },
    findOne(req, res) {
        Turtle.findById({ _id: req.params.id})
            .then((turt) => res.json(turt))
            .catch((err) => res.status(400).json(err))
    },
    findAll(req, res) {
        Turtle.find()
            .then((turt) => res.json(turt))
            .catch((err) => res.status(400).json(err))
    },
    update(req, res) {
        Turtle.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' })
            .then((updated) => res.json(updated))
            .catch((err) => res.status(400).json(err));
    },
    delete(req, res) {
        Turtle.findOneAndDelete({_id: req.params.id})
            .then(turt => res.json(turt))
            .catch(err => res.status(400).json(err))
    }
}