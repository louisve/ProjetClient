// Fonction pour envoyer un email de bienvenue
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'loic.missigbeto@isen.yncrea.fr',
        pass: 'VQJ36G!A9'
    },
});

async function sendWelcomeEmail(email, prenom, nom) {
  const mailOptions = {
    from: transporter.options.auth.user,
    to: email,
    subject: 'Bienvenue sur notre site',
    text: `Bonjour ${prenom} ${nom}, 
    Bienvenue sur notre site de Feng Shui !

    Nous sommes ravis de vous accueillir et de partager avec vous les principes et les bienfaits du Feng Shui, l'art ancestral chinois de l'harmonie et de l'équilibre dans l'environnement.
    
    Le Feng Shui offre des conseils pratiques pour améliorer l'énergie positive (chi) dans votre maison, votre lieu de travail et votre vie en général. En appliquant les principes du Feng Shui, vous pouvez créer un espace qui favorise la santé, la prospérité, les relations harmonieuses et le bien-être.
    
    Explorez notre site pour découvrir des articles, des conseils, des astuces et des idées inspirantes pour intégrer le Feng Shui dans votre vie quotidienne. Que ce soit pour aménager votre intérieur, organiser votre espace de travail ou créer une atmosphère apaisante, notre site regorge d'informations qui vous aideront à trouver l'équilibre et l'harmonie.
    
    N'hésitez pas à poser des questions, à participer à nos discussions et à partager votre expérience avec notre communauté passionnée du Feng Shui. Nous sommes là pour vous accompagner dans votre voyage vers une vie plus équilibrée et harmonieuse.
    Nous vous souhaitons une merveilleuse expérience sur notre site et nous espérons que le Feng Shui apportera de la vitalité, de la sérénité et du bonheur dans votre vie.
    
    Bienvenue dans le monde du Feng Shui !
    
    L'équipe du site de Feng Shui !`,
    };
    await transporter.sendMail(mailOptions);
    }

// Fonction pour envoyer un email de confirmation de contact
async function sendContactEmail(email, prenom, nom,telephone, message) {
    const mailOptions = {
        from: transporter.options.auth.user,
        to: 'louis.vernanchet@isen.yncrea.fr',
        subject: 'Demande de contact',
        text:'Bonjour, vous avez reçu une demande de contact de la part de ' + prenom + ' ' + nom + telephone + ' (' + email + ').' + message  + 'Merci de le recontacter au plus vite.',
    };
    await transporter.sendMail(mailOptions);
    }

module.exports = sendContactEmail;
module.exports = sendWelcomeEmail;    