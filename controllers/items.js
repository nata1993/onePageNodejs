const date = require('../generateDate.js');
const Task = require('../models/task');

let toDoList = [];

exports.getMainPage = (req, res) => {
    const itemsList = Task.fetchTasks();
    res.render("index.ejs", {
        date: date.getWeekDay(),
        toDoItems: itemsList
    });
};

exports.postNewItem = (req, res) => {
    /*let newTask = req.body.newTask;
    toDoList.push(newTask);*/
    const item = new Task(req.body.newTask);
    item.saveTask();
    res.redirect("/");
};