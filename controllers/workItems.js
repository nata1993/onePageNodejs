const date = require('../generateDate.js');
const WorkTask = require('../models/workTask');

//let workList = [];

exports.getWorkPage = (req, res) =>{
    WorkTask.fetchWorkTasks(items => {
        let day = date.getDate();
        res.render("work.ejs", {date: day, workItems: items});
    });

    /*res.render("work.ejs", {

        date: date.getWeekDay(),
        workItems: workList
    });*/
};

exports.postWorkItem = (req, res) =>{
    let newTask = new WorkTask(req.body.newTask);
    newTask.saveWorkTasks();
    res.redirect("/work");

    /*let newTask = req.body.newTask;
    workList.push(newTask);
    res.redirect("/work");*/
};

exports.deleteWorkItem = (req, res) => {
    console.log(req.body.checkbox);
    WorkTask.deleteItem(req.body.checkbox);
    res.redirect('/work');
}