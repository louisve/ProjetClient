const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    prenom: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);