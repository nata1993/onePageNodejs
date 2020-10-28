const fs = require('fs');
const path = require('path');
const pathToWorkTaskFile = path.join(path.dirname(process.mainModule.filename), 'data', 'workTask.json');

//let toDoList = [];

module.exports = class WorkTask {
    constructor(task){
        this.description = task;
    }

    saveWorkTasks(){
        fs.readFile(pathToWorkTaskFile, (error, fileContent) => {
            let tasks = [];

            if (!error){
                tasks = JSON.parse(fileContent);
            }

            tasks.push(this);

            fs.writeFile(pathToWorkTaskFile, JSON.stringify(tasks), (error) =>{
                console.log("error", error);
            });
        });
        //toDoList.push(this);
    }

    static fetchWorkTasks(callback){
        fs.readFile(pathToWorkTaskFile, (error, fileContent) => {
            if (error){
                callback([]);   // this callback is parameter from function
            }
            else{
                callback(JSON.parse(fileContent));
            }
        });

        //return toDoList;
    }

    static deleteItem(description){
        fs.readFile(pathToWorkTaskFile, (error, fileContent) => {
            let tasks = [];
            if(!error){
                tasks = JSON.parse(fileContent);
            }

            for(let i = 0; i < tasks.length; i++){
                if(tasks[i].description === description){
                    console.log(tasks[i].description, " deleted");
                    tasks.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(pathToWorkTaskFile, JSON.stringify(tasks), (error) =>{
                console.group("error while trying to delete", error);
            });
        });
    }
}