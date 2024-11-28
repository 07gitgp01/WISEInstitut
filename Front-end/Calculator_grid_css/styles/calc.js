// Sélectionner les éléments
const boutons = document.querySelectorAll('.boutton'); // Tous les boutons de la calculatrice
const affichage = document.querySelector('.display h1'); // Zone d'affichage des résultats

let expression = ''; // Stocke l'expression mathématique en cours

// Ajouter un écouteur d'événements à chaque bouton
boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const valeur = bouton.innerText;

        if (valeur === 'C') {
            // Efface l'affichage
            expression = '';
            affichage.innerText = '';
        } else if (valeur === 'del') {
            // Supprime le dernier caractère de l'expression
            expression = expression.slice(0, -1);
            affichage.innerText = expression;
        } else if (valeur === '=') {
            try {
                // Calculer l'expression et afficher le résultat
                let resultat = eval(expression.replace('X', '*')); // Remplacer 'X' par '*' pour l'évaluation
                affichage.innerText = resultat;
                expression = resultat.toString(); // Permet de continuer les calculs sur le résultat
                console.log(expression);
                expression = '';
            } catch (error) {
                affichage.innerText = "Erreur";
                expression = '';
            }
        } else {
            // Ajouter le caractère cliqué à l'expression
            expression += valeur;
            affichage.innerText = expression;
            console.log(expression);
        }
    });
});
