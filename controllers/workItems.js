const date = require('../generateDate.js');

let workList = [];

exports.getWorkPage = (req, res) =>{
    res.render("work.ejs", {
        date: date.getWeekDay(),
        workItems: workList
    });
};

exports.postWorkItem = (req, res) =>{
    let newTask = req.body.newTask;
    workList.push(newTask);
    res.redirect("/work");
};