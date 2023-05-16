const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
    unique: false,
    },
    telephone: {
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    // option: {

    //     type: Number,
    //     type: BigInt,

    //     type: BigInt,
    //     required: true,
    //     min: 1,
    //     max: 3
    // },
    message: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
}
);

module.exports = mongoose.model('Contact', contactSchema);