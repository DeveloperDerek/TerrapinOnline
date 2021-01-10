const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser'); 
const logger = require("morgan");
require('dotenv').config(); // stores environmental variables (.env), place .env at root of server folder

const connectDB = require("./configs/database"); //import database
connectDB(); //activate database

const app = express(); // activate express

app.use(logger("combined")); // login helper
app.use(cookieParser()); // activate cookies
app.use(express.json()); // alows req.body
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // client to server

app.use("/api/google/", require("./routes/google.route"));
app.use("/api/user/", require("./routes/user.route"));
app.use("/api/product/", require("./routes/product.route"));
app.use("/api/order/", require("./routes/order.route"));
app.use("/api/tortoise/", require("./routes/tortoise.route"));
app.use("/api/turtle/", require("./routes/turtle.route"));

app.listen(process.env.PORT, () => 
    console.log(`Listening on port ${process.env.PORT}`)
)