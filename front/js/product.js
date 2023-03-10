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

// function parlerAvecUnChinois() {
//   await fetch('Demander au chinois de nous dire quelle heure il est')
//     .then(reponseDuChinois => {
//       if (reponseDuChinois.ok) {
//         reponseDuChinois.francais()
//           .then(reponseTraduite => {
//             // le chinois nous a répondu par exemple dans un format { heure: 12, minute: 14 }
//             if (reponseTraduite.heure > 9) {
//               seReveiller()
//             }
//           })
//       }
//     })
// }

// function dessinerUnCheval() {
//   await fetch('Aller voir un cheval en vrai')
//     .then(imageDeNotreCheval => {
//       if (imageDeNotreCheval.ok) {
//         imageDeNotreCheval.dessinerLeCheval()
//           .then(dessin => {
//             offrirATaMeilleurePote(dessin)
//           })
//       }
//     })
// }

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
    ancreImage.setAttribute('src', afficherProduits.imageUrl)
    ancreImage.setAttribute('alt', afficherProduits.altTxt)
    /*ancreImage.src = afficherProduits.imageUrl
    ancreImage.alt = afficherProduits.altTxt*/
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

// function faireUnArticleDeBlogAvecUnDessin(infosAMettreDansLArticle) {
//   const ancreImage = document.querySelector('.item__img')
//   const ancreDuTitre = document.getElementById('title')
//   const ancreCouleurs = document.getElementById('colors')

//   ancreImage.src = infosAMettreDansLArticle.imageUrl

 // On parcourt les produits disponibles dans l'API
    // On ajoute une image
    /*const image = document.createElement('img')
    ancreImage.src = afficherProduits.imageUrl
    ancreImage.alt = afficherProduits.altTxt
    ancreImage.appendChild(image)

    // On ajoute un titre pour le dessin
    const nom = document.createElement('h3')
    nom.innerHTML = afficherProduits.name;
    title.appendChild(nom)
      
    // On ajoute un paragraphe qui décrit le dessin
    const descriptionDuProduit = document.createElement('p')
    descriptionDuProduit.innerHTML = afficherProduits.description
    description.appendChild(descriptionDuProduit)

    // On ajoute le prix du dessin
    const prix = document.createElement('p')
    prix.innerHTML = afficherProduits.price
    price.appendChild(prix)

    // Le même dessin à plusieurs versions de couleurs, alors on choisit au choix la version
    // Je passe chaque version à afficher à l'écran
    for (let color of afficherProduits.colors) {
      // On crée l'élément
      let options = document.createElement('option');
      // innerHTML veut dire afficher en html la balise <option> avec les couleurs ${colors}
      options.innerHTML = `<option value="${color}">${color}</option>`
      // On ajoute à l'ancre (notre élément qui maintenant contient la balise option
      ancreCouleurs.appendChild(options);
    };

}*/

class optionsProduct {
    constructor(id, quantity, color) {
        this.id = id;
        this.quantity = quantity;
        this.colors = colors;
    }
};

// Envoyer les informations sur le produit au stockage local
class Panier {
    addProduct = document.getElementById('addToCart');
    ancreImage = document.querySelector('.item__img')
    ancreDuTitre = document.getElementById('title')
    ancreDeLaDescription = document.getElementById('description')
    ancreDuPrix = document.getElementById('price')
    ancreCouleurs = document.getElementById('colors')
    ancreContent = document.querySelector('.item__content__settings');

    constructor() { 

        

    }

}