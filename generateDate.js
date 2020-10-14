/*module.exports = getDate;       // used when this file is called
//module.exports = getDate();   // used when it is needed immediaetly 

function getDate(){
    let d = new Date();
    let date = d.toLocaleDateString();
    return date;
}*/

// call like this if you need to call different stuff from this file
exports.getDate = function(){
    let d = new Date();
    let date = d.toLocaleDateString();
    return date;
}

exports.getWeekDay = function(){
    let d = new Date();
    let date = d.toLocaleDateString({
        weekday: "long",
        day: "numeric",
        month: "numeric"
    });
    return date;
}