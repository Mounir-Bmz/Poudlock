
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
        // On sélectionne la bulle, le formulaire  et l'input qu'on stocke dans  
        // des propriétés de l'objet app. 
        // https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector

       app.bubble = document.querySelector('.speech');
       app.form = document.querySelector('form'); 
       app.input = document.querySelector('.name');

        // On écoute la soumission du formulaire. Quand ce dernier est envoyé, 
        // alors on exécute la méthode handleSubmit.
        // https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener

       app.form.addEventListener('submit', app.handleSubmit);
        
    }, 
    // Méthode appelée quand on détecte une soumission
    handleSubmit: function(event) {
        // PreventDefault sert à bloquer le comportement par défaut du formulaire
        // au moment de sa soumission (c'est dire aller sur la page inscrite dans 
        // son attribut action). Ça empêche donc de recharger la page.
        event.preventDefault();

        let message;
        // On récupère la valeur du champ texte et on lui retire les espaces en début et en fin de chaîne 
        // grâce à trim (pour éviter les noms uniquement composés d'espaces).
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/trim
        let name = app.input.value.trim();
        // On vérifie la longueur de ce qui a été tapé dans l'input
        // S'il n'y a rien, on stocke un message d'erreur
        if(name.length == 0) {
            message = "Ça ne fonctionne qu'avec un nom, pardi !";
        } else {
            // Si un nom a été tapé, alors on exécute la méthode sortStudent et on stocke son résultat.
            message = app.sortStudent();
        }

        // Enfin, on écrit le résultat dans la bulle du choixpeau  avec la méthode writeBubble !
        app.writeBubble(message);
    },

    // Méthode qui tire au sort une maison et génère une image d'après le nom de la maison.
    sortStudent: function() {
        
        const random = Math.floor(Math.random() * (4 - 0) + 0);
        // Comme le nom de le maison correspond au nom de son image, on peut le
        // concaténer pour générer le lien vers l'image.
        let image = '<img src="images/' + app.houses[random] + '.png" />';

        return image;

    },
    // Méthode qui remplace le contenu de la bulle par le contenu passé en argument.
    writeBubble: function (content){
        app.bubble.innerHTML = content;
    }
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);