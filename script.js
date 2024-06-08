// déclaration variable character et initialisation avec "#" (quote)
const character = "#";
// déclaration de la variable count et initialisation avec la valeur 8 (pas de quote)
const count = 8;
// déclaration de la variable rows contenant un tableau vide
const rows = [];

// déclaration de la fonction padRow avec deux paramètres
function padRow(rowNumber, rowCount) {
  // la constante character est répétée autant de fois que la valeur de rowNumber
  return character.repeat(rowNumber);
}

// une boucle for a été déclarée. i vaut 0, il doit être inférieur à 8 et i est augmenté de 1
for (let i = 0; i < count; i = i + 1) {
  // la valeur de la variable character est ajoutée sur à la fin de chaque rangée du tableau rows
  // character est répété autant de fois que la valeur possédée par i+1 avec la méthode .repeat()
  // une valeur de i+1 est donnée à la méthode repeat pour qu'elle ai une valeur supérieure à 0
  rows.push(character.repeat(i + 1));
}

// déclaration de la variable result
let result = "";

// utilisation d'une boucle for...of pour parcourir le tableau rows avec la variable row.
for (const row of rows) {
  // le résultat de la valeur result est concaténée avec le + au caractère d'échappement \n et la variable row sont réassigné à la variable result
  result = result + "\n" + row;
}

// impression du résultat de result dans la console
console.log(result);
// step 60
