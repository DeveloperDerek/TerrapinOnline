const Animal = require("../models/animal.model");

module.exports = {
    create(req, res) {
        Animal.create(req.body)
            .then((animal) => res.json(animal))
            .catch(err => res.status(400).json(err))
    },
    findOne(req, res) {
        Animal.findById({ _id: req.params.id})
            .then((animal) => res.json(animal))
            .catch((err) => res.status(400).json(err))
    },
    findAll(req, res) {
        Animal.find()
            .then((animal) => res.json(animal))
            .catch((err) => res.status(400).json(err))
    },
    findTurtles(req, res) {
        Animal.find({ category: turtle })
            .then((turt) => res.json(turt))
            .catch((err) => res.status(400).json(err))
    },
    findTortoises(req, res) {
        Animal.find({ category: tortoise })
            .then((tort) => res.json(tort))
            .catch((err) => res.status(400).json(err))
    },
    update(req, res) {
        Animal.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' })
            .then((updated) => res.json(updated))
            .catch((err) => res.status(400).json(err));
    },
    delete(req, res) {
        Animal.findOneAndDelete({_id: req.params.id})
            .then(animal => res.json(animal))
            .catch(err => res.status(400).json(err))
    }
}