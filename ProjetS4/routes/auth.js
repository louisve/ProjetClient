const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();
const nodemailer = require('nodemailer');

// Importer la fonction sendWelcomeEmail
const sendWelcomeEmail = require('../public/js/email');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//

// Inscription
router.post('/inscription', async (req, res) => {
  const { prenom, nom, email, password } = req.body;
  try {
    const user = new User({
      prenom,
      nom,
      email,
      password, // Enregistrer le mot de passe sans le hacher
    });

    // Enregistrer l'utilisateur dans la base de données
    await user.save();
    
    res.redirect('/'); // Rediriger l'utilisateur vers la page d'accueil

    console.log('Utilisateur créé');

    // Envoi d'un email de bienvenue
    await sendWelcomeEmail(email, prenom, nom);

  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de la création de l'utilisateur");
  }
});


  
  // Connexion
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send('Email ou mot de passe incorrect');
      }
      if (password !== user.password) {
        return res.status(401).send('Email ou mot de passe incorrect');
      }
      
      res.redirect('/'); // Redirect the user to the homepage
  
      console.log('Utilisateur connecté');
    } catch (error) {
      console.log(error);
      res.status(500).send('Erreur lors de la connexion');
    }
  });
  


// export du module router
module.exports = router;