const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const postsRoute = require("./routes/posts");
const userRoute = require('./routes/user')

const app = express();

app.use(bodyParser.json())
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE")
//     app.use(cors());
//     next();
// })
app.use("/posts", postsRoute);
app.use("/user", userRoute);

module.exports = app;