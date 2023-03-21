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

function panier(afficherProduits) {

    // Article
    let article = document.createElement("article")
    let section = document.querySelector("#cart__items")
    section.appendChild(article)

    // DIV
    let divImage = document.createElement("div")
    let divContent = document.createElement("div")
    let divQuantity = document.createElement("div")
    let divContentSettings = document.createElement("div")
    let divContentSettingsQuantity = document.createElement("div")
    let productDelete = document.createElement("div")

    article.appendChild(divImage)
    article.appendChild(divContent)
    divContent.appendChild(divQuantity)
    divContent.appendChild(divContentSettings)
    divContentSettings.appendChild(divContentSettingsQuantity)
    divContentSettings.appendChild(productDelete)

    divImage.className = "cart__item__img"
    divContent.className = "cart__item__content"
    divQuantity.className = "cart__item__content__description"
    divContentSettings.className = "cart__item__content__settings"
    divContentSettingsQuantity.className = "cart__item__content__settings__quantity"
    productDelete.className = "cart__item__content__settings__delete"

    // Image
    let image = document.createElement("img")
    divImage.appendChild(image)
    image.setAttribute('src', afficherProduits.imageUrl)
    image.setAttribute('alt', afficherProduits.altTxt)

    // Titre
    let titre = document.createElement("h2")
    divContent.appendChild(titre)
    titre.innerHTML = afficherProduits.name
  
    // Couleur
    let couleur = document.createElement("p")
    productTitle.appendChild(productColor)
    couleur.innerHTML = afficherProduits.colors
    productColor.style.fontSize = "20px"

    // Prix
    let prix = document.createElement("p")
    divQuantity.appendChild(prix)
    prix.innerHTML = afficherProduits.price + " €";

    // Quantité
    let quantity = createElement("p")
    divContentSettingsQuantity.appendChild(quantity)
    quantity.innerHTML = "Qté : ";

    // Bouton Supprimer
    let productSupprimer = document.createElement("p");
    productDelete.appendChild(productSupprimer);
    productSupprimer.className = "deleteItem";
    productSupprimer.innerHTML = "Supprimer";
    
}

fonctionPrincipale()

removeProduct = document.getElementById('deleteItem');

removeProduct.addEventListener("click", function remove () {

    let id = new URLSearchParams(window.location.search).get("id");
    let price = document.getElementById("price").value;
  
    // On crée un objet avec l'id, la quantité et la couleur
    let product = {
      id: id,
      price: price,
    };
  
    // Si l'utilisateur sélectionne le même produit avec la même couleur, nous ajoutons la quantité au produit existant, sinon, nous ajoutons le produit au panier
    
    let basket = localStorage.getItem("basket");
    /***Variable pour stocker***/
    let total = 0
    //  si le panier existe déjà dans le local storage
    if (basket != null) {
        // Convertit le contenu du panier en objet JavaScript à partir du JSON du local storage
        basket = JSON.parse(basket);
        // Parcours tous les éléments du panier
        for (let i = 0; i < basket.length; i++) {
            // Si le produit à ajouter a le même id et la même couleur qu'un produit déjà présent dans le panier
            if (basket[i].id == product.id && basket[i].price == product.price) {
                // Ajoute la quantité du nouveau produit à la quantité du produit existant dans le panier
                basket[i].price =
                total + parseInt(basket[i].price) + parseInt(product.price);
                // Met à jour le contenu du panier dans le local storage avec la nouvelle quantité
                localStorage.setItem("basket", JSON.stringify(basket));
                alert("Le produit a bien été ajouté au panier");
                return;
            } else {
                // Si le produit à ajouter n'existe pas déjà dans le panier, il faut l'ajouter à la fin du panier
                basket.push(product);
                // Met à jour le contenu du panier dans le local storage avec le nouveau produit ajouté
                localStorage.setItem("basket", JSON.stringify(basket));
                alert("Le produit a bien été ajouté au panier");
                return;
            }
        }

    } else {
        // Si le panier n'existe pas encore, crée un nouveau panier vide
        basket = [];
        // Ajoute le produit à ce nouveau panier
        basket.push(product);
        // Stocke le contenu du panier dans le local storage
        localStorage.setItem("basket", JSON.stringify(basket));
        alert("Le produit a bien été ajouté au panier");
        return;
    }

})