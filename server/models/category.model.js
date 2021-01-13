const Mongoose = require("mongoose");

const categorySchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        products : [{
                type: Mongoose.Schema.ObjectId,
                ref: 'Product'
        }],
        imageKey: {
            type: String
        },
    }, {timestamps: true}
)

const Category = Mongoose.model("Category", categorySchema);

module.exports = Category;