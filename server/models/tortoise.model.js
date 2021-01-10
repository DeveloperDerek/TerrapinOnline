const Mongoose = require("mongoose");

const tortoiseSchema = new Mongoose.Schema(
    {
        commonName: {
            type: String
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

const Tortoise = Mongoose.model("Tortoise", tortoiseSchema);

module.exports = Tortoise;