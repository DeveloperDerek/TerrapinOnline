const Mongoose = require("mongoose");

const animalSchema = new Mongoose.Schema(
    {
        category: {
            type: String,
            required: true
        },
        commonName: {
            type: String,
            required: true
        },
        scientificName: {
            type: String
        },
        description: {
            type: String
        },
        origin: {
            type: String
        },
        diet: {
            type: String
        },
        size: {
            type: String
        },
        care: {
            type: String
        },
        imageKey: {
            type: String
        }
    }
)

const Animal = Mongoose.model("Animal", animalSchema);

module.exports = Animal;