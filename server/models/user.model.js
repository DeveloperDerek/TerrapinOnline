const Mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const reqErr = "{PATH} is required"
const bcrypt = require('bcrypt');

const userSchema = new Mongoose.Schema(
    {
        googleId: {
            type: String
        },
        firstName: {
            type: String,
            required: [true, "First name is required"],
            minlength: [2, "First name must be at least 2 characters"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            minlength: [2, "Last name must be at least 2 characters"]
        },
        password: {
            type: String,
            required: [true, reqErr],
            minlength: [5, "Password must be at least 5 characters"]
        },
        email: {
            type: String,
            required: [true, reqErr],
            unique: true,
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        role: {
            type: String,
            default: 'ROLE_MEMBER',
            enum: ['ROLE_MEMBER', 'ROLE_ADMIN', 'ROLE_MERCHANT']
        }
    }, {timestamps: true}
)

// As our UserSchema doesn't contain a field for confirmPassword (and we really wouldn't want to save that to our database) we will need to add in a touch of code to allow us to compare password with it. We can make use of mongoose virtuals—basically fields we don't want to save in MongoDB—to accomplish this. We will chain calls to get and set to the returned virtual object, allowing us to establish both a getter and a setter for the virtual field.
userSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set(value => (this._confirmPassword = value));

// Next we need to make use of some Middleware to add in another validation. Specifically we will be using the "pre hook" and having it run before validations.
userSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
});

// It's recommended to use Bcrypt in an asynchronous way so we will be using it with Promises. The "10" inside the bcrypt.hash() function refers to the number of salt rounds that Bcrypt will use when generating a salt. For our purposes "10" will be a fine value here. As in our previous Middleware we will need to call the "next" function once the Promise is fulfilled.
userSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

userSchema.plugin(uniqueValidator, {message: "{PATH} is already taken"});

const User = Mongoose.model("User", userSchema);

module.exports = User;