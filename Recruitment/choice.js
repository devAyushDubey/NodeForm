const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
    uid: Number,
    name:String,
    libid: String,
    email: String,
    phone: String,
    domain1: String,
    domain2: String,
    domain3: String,
    date: String
})

const choice = new mongoose.model('choice',choiceSchema);

module.exports = choice;