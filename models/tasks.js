const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    dueDate: {type: Date},
    completed: { type: Boolean},
    uploaded_by: {type: Schema.Types.ObjectId, ref: 'User'},
    createDate: {type: Date},
    completeDate: {type: Date}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Tasks', taskSchema);