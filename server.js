const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const burgers_controller = require("./controllers/burgers_controller");

const app = express();
const PORT = process.env.PORT || 3306;

/* Decoding middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Public static directory for serving up assets and files */
app.use("/public", express.static(path.join(__dirname, "public")));