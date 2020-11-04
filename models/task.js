const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const taskSchema = new Scheme({
    description: {
        type: String
    }
});

mongoose.model('Task', taskSchema);