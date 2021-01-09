const mongoose = require("mongoose");

const tortoiseSchema = new mongoose.Schema(
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

const Tortoise = mongoose.model("Tortoise", tortoiseSchema);

module.exports = Tortoise;