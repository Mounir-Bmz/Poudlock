# Poudlock

Il était une fois, une école d'apprentis magidevs du nom de Poudlock. Cette école a été fondée par 4 personnes aux talents divers et complémentaires : **Anthony**, **Dario**, **Lucie** et **Maxime**.

Ces derniers décidèrent de diviser l'école en 4 maisons distinctes basées sur leurs noms. Pour ce faire, nos magidevs conçurent un habile système de sélection bâptisé le **choixpeau**. Toute ressemblance avec une oeuvre de fiction serait purement fortuite.

Seulement, le choixpeau souffre de quelques ratés ces temps-ci et n'arrive plus à attribuer de maison aux nouveaux apprentis.

Votre mission sera de recoder le choixpeau afin qu'il repuisse officier !


## But de l'exercice

Quand on entre un nom dans le champ du formulaire et qu'on valide, le choixpeau doit afficher le blason d'une des maisons de Poudlock dans sa bulle de dialogue. Si on valide le formulaire vide, il doit dire *"Ça ne fonctionne qu'avec un nom, pardi !"*.

Exemple de choixpeau réparé :
![Alt text](screens/capture.png?raw=true "Optional Title")


##  Instructions

Tu as à disposition : un fichier HTML déjà fait, un fichier CSS et un fichier JS à compléter, le seul nécessitant une modification. Ce dernier contient déjà une base de module.

Pour cet exercice vous aurez le choix de faire la répartition des apprentis magidevs selon deux principes : le **mode chaotique** ou le **mode organisé**.

### Mode chaotique - Facile

Quand on tape le nom d'un apprenti magidev, on affiche un blason de manière aléatoire.

### Mode organisé - Difficile 

Quand on tape le nom d'un apprenti magidev, on affiche un blason selon des règles prédéfinies : 

- Si le nom contient exactement **8 caractères**, on affiche le blason de la maison **Maxopus**.
- Sinon, si la **première** lettre du nom est un **L** ou la **dernière** un **X**, on affiche le blason de la maison **Lustrix**.
- Sinon, si le nombre de lettres du nom est un **multiple de 5** ou un **multiple de 3**, on affiche le blason de la maison **Anthorvus**.
- Sinon, on affiche le blason de la maison **Darioptera**.



## Par quoi je commence ?

Le fichier `app.js` contient déjà un début de module. Au chargement de la page, la méthode `init` de l'objet `app` est exécutée. 

Voici une petite aide, pas à pas pour, t'aider à commencer : 

1. Sélectionner le formulaire contenant le champ.
2. Ecouter la soumission du formulaire.
3. Quand le formulaire est soumis, on récupère le contenu du champ texte.
4. On fait des vérifications sur le contenu du champ (Ex : est-il vide ?) selon le mode qu'on a choisi.
5. On modifie le contenu de la bulle en conséquence.


## Indices

<details>
<summary>Mode chaotique</summary>

 - Il y a un tableau avec toutes les maisons. Elles auront donc un index qui va de 0 à 3.
 - En JS, on peut récupérer un nombre aléatoire entre deux bornes incluses grâce à la formule suivante. Dans l'exemple, on tire un nombre entre 25 et 50.
 ```
 var randomNumber = Math.floor(Math.random() * (50 - 25) + 25);
 ```

</details>
<details>
<summary>Mode organisé</summary>

 - On peut utiliser la propriété `length` pour compter le nombre de caractères d'une string.
 - Pour savoir quelle lettre est située à telle position d'une string, on peut utiliser la fonction [charAt](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/charAt).
 - Pour connaître un multiple, on peut utiliser modulo `%`.

</details>