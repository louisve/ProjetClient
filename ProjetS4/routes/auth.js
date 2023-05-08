const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Inscription
router.post('/inscription', async (req, res) => {
    const { nom, prenom, email, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({
        nom,
        prenom,
        email,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send('Erreur lors de la création de l\'utilisateur');
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
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
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