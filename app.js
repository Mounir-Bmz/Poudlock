let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],

    currentMode: 'organise',

    // Méthode appelée au chargement de la page
    init: function () {
        app.bubble = document.querySelector('.speech');
        app.form = document.querySelector('form');
        app.input = document.querySelector('.name');

        const modeToggle = document.getElementById('modeToggle');

        modeToggle.addEventListener('change', function () {
            if (modeToggle.checked) {
                app.currentMode = 'chaotique';
            } else {
                app.currentMode = 'organise';
            }
            app.updateModeIndicator();
        });

        // On écoute la soumission du formulaire. Quand ce dernier est envoyé, 
        // alors on exécute la méthode handleSubmit.
        app.form.addEventListener('submit', app.handleSubmit);

    },

    updateModeIndicator: function () {
        const modeIndicator = document.getElementById('modeIndicator');
        modeIndicator.textContent = 'Mode actuel : ' + (app.currentMode === 'chaotique' ? 'Chaotique' : 'Organisé');
    },

    // Méthode appelée quand on détecte une soumission
    handleSubmit: function (event) {
        // PreventDefault empêche de recharger la page.
        event.preventDefault();

        let message;
        // On récupère la valeur du champ texte et on lui retire les espaces en début et en fin de chaîne 
        // grâce à trim (pour éviter les noms uniquement composés d'espaces).
        let name = app.input.value.trim();
        // On vérifie la longueur de ce qui a été tapé dans l'input
        // S'il n'y a rien, on stocke un message d'erreur
        if (name.length == 0) {
            message = "Ça ne fonctionne qu'avec un nom, pardi !";
        } else {
            if (app.currentMode === 'organise') {
                message = app.sortStudentOrganise(name);
            } else if (app.currentMode === 'chaotique') {
                message = app.sortStudentChaotique();
            }
        }
        // Enfin, on écrit le résultat dans la bulle du choixpeau  avec la méthode writeBubble !
        app.writeBubble(message);
    },

    // Méthode qui choisit une maison et génère une image d'après le nom de la maison.
    sortStudentOrganise: function (name) {

        // On définit une constante qui va stocker le nom de la maison.
        let house;

        // On passe notre nom en minuscules. Ce sera plus facile pour les vérifications.
        name = name.toLowerCase();

        // Si le nom a 8 caractères
        if (name.length == 8) {
            house = 'maxopus';
        }
        // Si le nom commence par L ou finit par X.
        // Le premier caractère est à l'index 0
        // Le dernier est à l'index de la longueur de la chaîne moins 1 (car les index commencent à 0)
        else if (name.charAt(0) == 'l' || name.charAt(name.length - 1) == 'x') {
            house = "lustrix";
        }
        // Si la longueur du nom est un multiple de 5. 
        // Il faut donc qu'il n'y ait pas de reste quand on divise la longueur par 5 ou par 3
        else if (name.length % 5 == 0 || name.length % 3 == 0) {
            house = "anthorvus";
        }
        // Dans tous les autres cas
        else {
            house = "darioptera";
        }

        // Mettre à jour la couleur d'arrière-plan en fonction de la maison
        document.body.style.backgroundColor = app.getHouseColor(house);

        // Comme le nom de le maison correspond au nom de son image, on peut le
        // concaténer pour générer le lien vers l'image.
        let image = '<img src="images/' + house + '.png" />';
        return image;
    },

    // Méthode qui tire au sort une maison et génère une image d'après le nom de la maison.
    sortStudentChaotique: function () {
        const random = Math.floor(Math.random() * (4 - 0) + 0);
        let image = '<img src="images/' + app.houses[random] + '.png" />';

        // Mettre à jour la couleur d'arrière-plan en fonction de la maison
        document.body.style.backgroundColor = app.getHouseColor(app.houses[random]);

        return image;
    },

    // Méthode pour obtenir la couleur associée à une maison
    getHouseColor: function (house) {
        switch (house) {
            case 'anthorvus':
                return '#5B1511'; // Couleur pour Anthorvus
            case 'darioptera':
                return '#091D22'; // Couleur pour Darioptera
            case 'lustrix':
                return '#1A3420'; // Couleur pour Lustrix
            case 'maxopus':
                return '#161224'; // Couleur pour Maxopus
            default:
                return '#1a1103'; // Couleur par défaut
        }
    },

    // Méthode qui remplace le contenu de la bulle par le contenu passé en argument.
    writeBubble: function (content) {
        app.bubble.innerHTML = content;
    }
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);