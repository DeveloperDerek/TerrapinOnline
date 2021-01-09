const mongoose = require("mongoose");

const turtleSchema = new mongoose.Schema(
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

const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;