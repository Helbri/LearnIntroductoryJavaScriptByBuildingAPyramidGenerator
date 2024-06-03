// déclaration variable character et initialisation avec "Hello" (quote)
let character = "Hello";
// déclaration de la variable count et initialisation avec la valeur 8 (pas de quote)
let count = 8;
// déclaration de la variable rows contenant un tableau avec des chaînes
let rows = ["Naomi", "Quincy", "CamperChan"];
// la méthode .push() permet l'ajout d'une chaîne à la fin du tableau ("freeCodeCamp")
rows.push("freeCodeCamp");
// la variable pushed prends en assignation le résultat de la méthode push sur l'objet rows. Ajoute un élément après le dernier élément du tableau.
let pushed = rows.push("freeCodeCamp");
// permet de voir la nouvelle longueur du tableau après l'ajout
console.log(pushed);
// la variable popped prends en assignation le résultat de la méthode pop sur l'objet rows. Supprime le dernier élément du tableau et retourne l'élément supprimé.
let popped = rows.pop();
// affiche dans la console le résultat de la variable popped
console.log(popped);
// affiche dans la console le contenu actuel de la variable rows
console.log(rows);
// step 25
