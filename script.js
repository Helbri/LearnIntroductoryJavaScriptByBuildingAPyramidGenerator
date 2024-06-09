// déclaration variable character et initialisation avec "#" (quote)
const character = "#";
// déclaration de la variable count et initialisation avec la valeur 8 (pas de quote)
const count = 8;
// déclaration de la variable rows contenant un tableau vide
const rows = [];

// déclaration de la fonction padRow avec deux paramètres
function padRow(rowNumber, rowCount) {
  // la constante character est répétée autant de fois que la valeur de rowNumber, avec un espace vide concaténé avant et après
  // l'espace concaténé est répété par le nombre produit par rowCount - rowNumber
  // character est répété autant de fois que la valeur de 2 * rowNumber - 1
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// TODO: use a different type of loop
/*
// une boucle for a été déclarée. i vaut 1, il doit être inférieur ou égal à 8 et i est incrémenté de lui-même  de + 1 avec ++
for (let i = 1; i <= count; i++) {
  // la fonction padRow est passée comme paramètre à la méthode .push, méthode associée à la variable rows
  // les paramètres i et count sont passés à l'appel de fonction padRow
  rows.push(padRow(i, count));
}
*/

// création d'un boucle if avec pour condition la chaîne "false" qui prend une valeur véridique et devient true
if ("false") {
  console.log("Condition is true");
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
// step 75
