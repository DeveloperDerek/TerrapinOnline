const Mongoose = require("mongoose");

const turtleSchema = new Mongoose.Schema(
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

const Turtle = Mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;