const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(() => console.log('Connexion à MongoDB échouée'));

// Démarrage du serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

// Routes
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

// Middleware pour les routes d'authentification
app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);