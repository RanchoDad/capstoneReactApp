const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    finish_by: {type: Date},
    completed: { type: Boolean, required: true},
    uploaded_by: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Tasks', taskSchema);