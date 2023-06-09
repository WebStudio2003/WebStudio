const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    activationLink: {
        type: String
    },
    roles: [{
        type: String, 
        ref: 'Role'
    }]
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;