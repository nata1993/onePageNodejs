const date = require('../generateDate.js');
const Task = require('../models/task');

//let toDoList = [];

exports.getMainPage = (req, res) => {
    Task.fetchTasks(items => {
        let day = date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    });

    /*const itemsList = Task.fetchTasks();
    res.render("index.ejs", {
        date: date.getWeekDay(),
        toDoItems: itemsList
    });*/
};

exports.postNewItem = (req, res) => {
    /*let newTask = req.body.newTask;
    toDoList.push(newTask);*/
    const item = new Task(req.body.newTask);
    item.saveTask();
    res.redirect("/");
};

exports.deleteItem = (req, res) => {
    console.log(req.body.checkbox);
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');
}