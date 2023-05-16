const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../models/contact');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// Route pour ajouter un contact
router.post('/contacter', async (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const telephone = req.body.telephone;
    // convertir message en string
    const message = JSON.stringify(req.body.message);

    try {
         const contact = new Contact({
             nom,
             prenom,
             email,
             telephone,
             message,
         });
        await contact.save();
        res.redirect('/');
        // Envoi de l'emai à l'administrateur
        await sendContactEmail(email, prenom, nom, telephone, message);

    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur lors de l\'ajout du contact');
    }
});


module.exports = router;