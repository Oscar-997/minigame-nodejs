const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, require: true},
    fullname: {type: String, require: true},
    phonenumber: {type: String, require: true},
    checkout: {type: Boolean},
    wallet: {type: String},
}, {
    timestamps:true,
    collection:'users'
})

module.exports = mongoose.model('User', User)