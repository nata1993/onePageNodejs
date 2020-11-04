const fs = require('fs');
const path = require('path');
const pathToRegulatTaskFile = path.join(path.dirname(process.mainModule.filename), 'data', 'regularTask.json');

//let toDoList = [];

module.exports = class Task {
    constructor(task){
        this.description = task;
    }

    saveTask(){
        fs.readFile(pathToRegulatTaskFile, (error, fileContent) => {
            let tasks = [];

            if (!error){
                tasks = JSON.parse(fileContent);
            }

            tasks.push(this);

            fs.writeFile(pathToRegulatTaskFile, JSON.stringify(tasks), (error) =>{
                console.log("error", error);
            });
        });
        //toDoList.push(this);
    }

    static fetchTasks(callback){
        fs.readFile(pathToRegulatTaskFile, (error, fileContent) => {
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
        fs.readFile(pathToRegulatTaskFile, (error, fileContent) => {
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

            fs.writeFile(pathToRegulatTaskFile, JSON.stringify(tasks), (error) =>{
                console.group("error while trying to delete", error);
            });
        });
    }
}