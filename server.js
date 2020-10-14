const express = require("express");
const bParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/generateDate.js");

const app = express();
app.set("views engine", ejs);
app.use(bParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    
    res.render("index.ejs", {
        date: date.getWeekDay(),
        toDoItems: toDoList
    });
});

let toDoList = [];
app.post("/", (req, res) =>{
    let newTask = req.body.newTask;
    toDoList.push(newTask);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});