// LANGUAGE 
let currentLang = 'en';

const translations = {
    en: {
        //General Part
        title: "Personal Portfolio <3",
        nav_about: "ABOUT",
        nav_projects: "PROJECTS",
        nav_contact: "CONTACT",
        hero_line: "WELCOME TO MY PORTFOLIO ✿",
        footer_text: "©2025, All rights reserved",
        getInTouchBox: "Get in touch 🤝",
        downCV: "Download CV 📥",
        typewriter1: "Mobile Application Developer",
        typewriter2: "Full-Stack Web Developer",
        typewriter3: "Crafting user-friendly experiences",

        //About Part
        about_title: "GET TO KNOW ME! 👩‍🎓",
        parag: `Hi! I'm <strong style="color: rgb(167, 34, 167);">Leen Al Harash</strong>, a web and application development student, soon to graduate,  with a passion for creating clean programming experiences. <br><br>Furthermore, I'm experienced in customer service with strong communication & leadership skills , that gives me the opportunity to interact and deal comfortably with various clients.`,

        
        //Project Part
        title_pro: "MY PROJECTS 💼",
        greenDesc: "A transactional website that provides seeds, vegetables, wheats, etc. While also providing real-time market data.",
        cowboyDesc: "A desertic 2D video game filled with obstacles to prevent the cowboy from finding his lost item. This game also has a continuous in 3D and another part combined.",
        snakeDesc: "An online game where the player guides a growing snake to eat the apple. The goal is to make the snake as large as possible before it collides with itself.",
        musicDesc: "An Android music app supporting English and French, that allows you to add, delete, edit and search up songs.",
        tictacDesc: "The classical game where you play against a robot that blocks moves strategically. The app supports English, French, and Spanish.",
        portfolioDesc: "A bilingual personal website that features a responsive layout and smooth animations, serving as a central hub for my work and career highlights.",
        shatterClick: "A fun and interactive Pygame game where a bouncing “CLICK ME!” text floats across the screen. Clicking anywhere triggers a glass-breaking sound for extra effect and colorful shatter effects with animated cracks and background color changes.",

        
        //Contact Part
        contact_title: "GET IN TOUCH! 📍",
        contact_intro: `Got a job opportunity or a project in mind? I’d love to hear from you.
                        <a href="https://www.linkedin.com/in/leen-al-harash-6134a0304/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/LeenAlHarash"><i class="fab fa-github"></i></a>
                        <a href="https://discordid.netlify.app/?id=1077390981688729702"><i class="fab fa-discord"></i></a>`,
        contact_name_label: "Name :",
        contact_email_label: "Email :",
        contact_message_label: "Message :",
        contact_submit: "Send",
        contact_alert: "Message sent!"
    },
    fr: {
        //General Part
        title: "Portfolio Personnel <3",
        nav_about: "À PROPOS",
        nav_projects: "PROJETS",
        nav_contact: "CONTACT",
        hero_line: "BIENVENUE DANS MON PORTFOLIO ✿",
        footer_text: "©2025, Tous droits réservés",
        getInTouchBox: "Entrer en contact 🤝",
        downCV: "Télécharger CV 📥",
        typewriter1: "Développeuse d'applications mobiles",
        typewriter2: "Développeuse web full-stack",
        typewriter3: "Concepteuse d'expériences utilisateur intuitives",


        //About Part
        about_title: "APPRENDS À ME CONNAÎTRE! 👩‍🎓",
        parag: `Salut! Je suis <strong style="color: rgb(167, 34, 167);">Leen Al Harash</strong>, une étudiante en développement web et mobile, bientôt diplômée, passionnée par la création d’expériences numériques propres. J’aime autant la créativité du front-end que la résolution de problèmes du back-end. <br><br>De plus, j'ai de l'expérience dans le service client avec de solides compétences en communication & en leadership, ce qui me donne l'opportunité d'interagir et de traiter confortablement avec divers clients.`,


        //Project Part
        title_pro: "MES PROJETS 💼",
        greenDesc: "Un site Web transactionnel qui fournit des semences, des légumes, du blé, etc. Tout en fournissant également des données de marché en temps réel.",
        cowboyDesc: "Un jeu vidéo 2D désertique rempli d'obstacles pour empêcher le cow-boy de retrouver son objet perdu. Ce jeu propose également une partie continue en 3D et une autre partie combinée.",
        snakeDesc: "Un jeu en ligne où le joueur guide un serpent en pleine croissance pour qu'il mange la pomme. Le but est de rendre le serpent aussi grand que possible avant qu'il ne se percute lui-même.",
        musicDesc: "Une application musicale Android prenant en charge l'anglais et le français, qui vous permet d'ajouter, de supprimer, de modifier et de rechercher des chansons.",
        tictacDesc: "Un jeu classique où vous affrontez un robot qui bloque les déplacements de manière stratégique. L'application est disponible en anglais, français et espagnol.",
        portfolioDesc: "Un site Web personnel bilingue doté d'une mise en page réactive et d'animations fluides, servant de plaque tournante centrale pour mon travail et les points forts de ma carrière.",
        shatterClick: "Un jeu Pygame amusant et interactif où un texte «CLICK ME!» rebondit sur l'écran. Cliquer déclenche un bruit de verre brisé pour un effet supplémentaire et des effets de bris colorés avec des fissures animées et des changements de couleur d'arrière-plan.",


        //Contact Part
        contact_title: "ÉCRIVEZ-MOI! 📍",
        contact_intro: `Vous avez une opportunité ou un projet en tête ? J’adorerais en entendre parler.
                        <a href="https://www.linkedin.com/in/leen-al-harash-6134a0304/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/LeenAlHarash"><i class="fab fa-github"></i></a>
                        <a href="https://discordid.netlify.app/?id=1077390981688729702"><i class="fab fa-discord"></i></a>`,
        contact_name_label: "Nom :",
        contact_email_label: "E-mail :",
        contact_message_label: "Message :",
        contact_submit: "Envoyer",
        contact_alert: "Message envoyé !"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (translations[lang].title) {
        document.title = translations[lang].title;
    }

    const toggleBtn = document.getElementById("langToggleBtn");
    if (toggleBtn) {
        toggleBtn.innerText = (lang === 'en' ? '🌐FR' : '🌐EN');
    }

    // Restart typewriter animation with new language 
    restartTypewriter();
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
}

window.onload = () => {
    const saved = localStorage.getItem('preferredLang');
    if (saved) {
        currentLang = saved;
    }
    setLanguage(currentLang);
};