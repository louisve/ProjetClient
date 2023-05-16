const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

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
    
    res.status(201).send(user);
    //res.redirect('/'); // Rediriger l'utilisateur vers la page d'accueil

    console.log('Utilisateur créé');
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
    const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(200).send('Vous êtes connecté');
  } catch (error) {
    console.log(error);
    res.status(500).send('Erreur lors de la connexion');
  }
});


// export du module router
module.exports = router;