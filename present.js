const mongoose = require('mongoose');

const presSchema = new mongoose.Schema({
    ip:String,
    name: String,
    email: String,
    date: String
})

const pre = new mongoose.model('pre',presSchema);

module.exports = pre;