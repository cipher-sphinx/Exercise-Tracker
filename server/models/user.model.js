const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    username: String,
    password: String,
    role: String,
    active: Boolean
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);