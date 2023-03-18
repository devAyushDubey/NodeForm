const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    branch: String,
    year: String,
    residence: String,
    domain: String,
    date: String
})

const reg = new mongoose.model('reg',regSchema);

module.exports = reg;