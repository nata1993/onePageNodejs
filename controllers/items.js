const date = require('../generateDate.js');
const mongoose = require('mongoose');

const Task = mongoose.model('Task');

exports.getMainPage = (req, res) => {

    let day = date.getDate();
    Task.find((error, tasks) => {
        if (!error){
            res.render('index.ejs', {date: day, toDoItems: tasks});
        }
        else{
            console.log("failed data retrieval: ", error);
        }
    });
};

exports.postNewItem = (req, res) => {
    const item = req.body.newTask;
    let newTask = new Task();
    newTask.description = item;

    newTask.save((error, response) => {
        if(!error){
            res.redirect('/');
        }
        else{
            console.log(error);
        }
    });
};

exports.deleteItem = (req, res) => {
    console.log(req.body.checkbox);
    const checkedItemId = req.body.checkbox;
    Task.findByIdAndRemove(checkedItemId, function(error){
        if(!error){
            console.log("deleted item: ", checkedItemId);
            res.redirect('/');
        }
        else{
            console.log("error in deleting item from DB");
        }
    });
}