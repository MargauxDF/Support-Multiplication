const table = document.getElementById('table');

function generateTable() {
  // recupérer valeurs input
  let valeurMax = document.getElementById('nbOfLines').value;
  let multiplicateurMax = document.getElementById('nbOfColumns').value;
 
  // transformer la valeur en int
  valeurMax = parseInt(valeurMax);
  multiplicateurMax = parseInt(multiplicateurMax);

  //checker si valeur ce n'est pas un nombre (renvoyer message erreur)
  if (Number.isNaN(valeurMax) || Number.isNaN(multiplicateurMax)) {
    table.innerHTML = "<p>Merci de choisir deux nombres</p>";
  } else {
    //sinon creer tableau
    let createTable = "<table>";
    // je boucle une premiere fois sur les valeursMax pour le nb de lignes
    for (let valeur = 1; valeur <= valeurMax; valeur++) {
      // je créer une ligne dans mon tableau
      createTable = createTable + "<tr>";
      // je boucle sur le nb de colonnes (contenu des cases)
      for (let multiplicateur = 1; multiplicateur <= multiplicateurMax; multiplicateur++) {
        // je créer mes cellules 
        createTable += "<td>" + valeur * multiplicateur + "</td>";
      }
      // je ferme ma ligne
      createTable += "</tr>";
    }
    // je ferme mon tableau
    createTable += "</table>";

    // je met mon tableau dans ma div
    table.innerHTML = createTable;
  }
}
