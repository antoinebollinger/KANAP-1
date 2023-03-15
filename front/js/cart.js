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
    })

};