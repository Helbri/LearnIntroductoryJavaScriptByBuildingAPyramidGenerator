// déclaration variable character et initialisation avec "#" (quote)
const character = "#";
// déclaration de la variable count et initialisation avec la valeur 8 (pas de quote)
const count = 8;
// déclaration de la variable rows contenant un tableau vide
const rows = [];

// une boucle for a été déclarée. i vaut 0, il doit être inférieur à 8 et i est augmenté de 1
for (let i = 0; i < count; i = i + 1) {
  // i est ajouté sur à la fin de chaque rangée de tableau rows
  rows.push(i);
}

// déclaration de la variable result
let result = "";
// impression du résultat de result dans la console
console.log(result);

// utilisation d'une boucle for...of pour parcourir le tableau rows avec la variable row.
for (const row of rows) {
  // le résultat de la valeur result est concaténée avec le + au caractère d'échappement \n et la variable row sont réassigné à la variable result
  result = result + "\n" + row;
}
// step 40
