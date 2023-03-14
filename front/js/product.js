/***Récupérer l'id des produits***/

var productId = new URL(location).searchParams.get("id");

async function fonctionPrincipale() {
  await fetch(`http://localhost:3000/api/products/${productId}`)
    .then(convertir => {
      if (convertir.ok) {
          convertir.json()
            .then(afficherProduits => {
                ajouterLesProduitsDansLaPage(afficherProduits);
            })
      } else {
          console.log('Retour du serveur : ', convertir.status);
          const infoErreur = document.querySelector('.item');
          infoErreur.innerHTML = `<h1>Le produit est introuvable...</h1>`;
      }
})};

function ajouterLesProduitsDansLaPage(afficherProduits) {

    // 0. récupérer l'ancre dans la page
    const ancreImage = document.querySelector('.item__img')
    const ancreDuTitre = document.getElementById('title')
    const ancreDeLaDescription = document.getElementById('description')
    const ancreDuPrix = document.getElementById('price')
    const ancreCouleurs = document.getElementById('colors')

    // On parcourt les produits disponibles dans l'API
      // On ajoute une image
      const image = document.createElement('img')
      // Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. 
      // Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.
      image.setAttribute('src', afficherProduits.imageUrl)
      image.setAttribute('alt', afficherProduits.altTxt)
      ancreImage.appendChild(image)

      // On ajoute un h3 à l'article
      const nom = document.createElement('h3')
      nom.innerHTML = afficherProduits.name;
      title.appendChild(nom)
        
      // On ajoute un paragraphe à l'article
      const descriptionDuProduit = document.createElement('p')
      descriptionDuProduit.innerHTML = afficherProduits.description
      description.appendChild(descriptionDuProduit)

      // On ajoute un paragraphe pour le prix
      const prix = document.createElement('p')
      prix.innerHTML = afficherProduits.price
      price.appendChild(prix)

      for (let color of afficherProduits.colors) {
          // On crée l'élément
          let options = document.createElement('option');
          // innerHTML veut dire afficher en html la balise <option> avec les couleurs ${colors}
          options.innerHTML = `<option value="${color}">${color}</option>`
          // On ajoute à l'ancre
          ancreCouleurs.appendChild(options);
      };

}

fonctionPrincipale()