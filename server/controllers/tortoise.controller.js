const Tortoise = require("../models/tortoise.model");

module.exports = {
    create(req, res) {
        Tortoise.create(req.body)
            .then((tort) => res.json(tort))
            .catch(err => res.status(400).json(err))
    },
    findOne(req, res) {
        Tortoise.findById({ _id: req.params.id})
            .then((tort) => res.json(tort))
            .catch((err) => res.status(400).json(err))
    },
    findAll(req, res) {
        Tortoise.find()
            .then((tort) => res.json(tort))
            .catch((err) => res.status(400).json(err))
    },
    update(req, res) {
        Tortoise.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' })
            .then((updated) => res.json(updated))
            .catch((err) => res.status(400).json(err));
    },
    delete(req, res) {
        Tortoise.findOneAndDelete({_id: req.params.id})
            .then(tort => res.json(tort))
            .catch(err => res.status(400).json(err))
    }
}