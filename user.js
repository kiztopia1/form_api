const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    ID: {
        type: String
    },
    PASS: {
        type: String
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User; 