const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/contact');
const router = express.Router();

// Route pour ajouter un contact
router.post('/ajouter-contact', async (req, res) => {
    const { nom, prenom, email, telephone, option, message } = req.body;
    try {
        const contact = new Contact({
            nom,
            prenom,
            email,
            telephone,
            option,
            message,
        });
        await contact.save();
        res.status(201).send(contact);
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur lors de l\'ajout du contact');
    }
});


module.exports = router;