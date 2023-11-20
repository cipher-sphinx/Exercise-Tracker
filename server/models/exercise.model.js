const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: String,
    description: String,
    duration: Number,
    date: Date
}, {
    timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseSchema);
