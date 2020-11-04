// AN MVC TYPE PROJECT

const express = require("express");
const bParser = require("body-parser");
const ejs = require("ejs");
require('./models/db');

const mainPage = require('./routes/main');

const about = require('./routes/about');
const getError = require('./routes/404');
const workItems = require('./routes/work');

const app = express();
app.set("views engine", ejs);
app.use(bParser.urlencoded({extended: true}));
app.use(express.static("public"));

//routers
app.use(workItems);
app.use(mainPage);
app.use(about);

// router 404 must always be the last one to be called
app.use(getError);

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});