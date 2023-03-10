/*let seeStorage = document.getElementById('seeStorage')

addProduct.addEventListener('click', function () {
    const iPhone = {
        name: 'iPhone',
        price: 1000,
        color: 'pink',
    }
    const iPhoneString = JSON.stringify(iPhone)
    window.localStorage.setItem('product', iPhoneString)
})

// Voir le localstorage

addProduct.addEventListener('click', function () {
    const localStorage = window.localStorage
    const productInObject = JSON.parse(localStorage.product)
    console.log(productInObject.color)
})

// Bien revoir ces notions là, si c'est flou, alors tu ne peux pas encore passer à la notion de localStorage
// const string = 'Julie'
// const number = 1000
// const boolean = true // or false
// const array = [1, 2, 3, 4, 5]
// const array2 = ['Julie', 'Lars', 'Mads', 'Morten', 'Mikkel']
// const array3 = [1, 'Julie', true, [1, 2, 3, 4, 5]]
// const object = {
//     name: 'Julie',
//     age: 1000,
//     isAwesome: true,
//     array: [1, 2, 3, 4, 5],
// }

// const numberString = '1000'
// const addition = 1000 + 1000 // => 2000
// const additionString = '1000' + '1000' // => '10001000'*/

// localstorage permet d'enregistrer les données et en plus sécurisé que les cookies
// Mode Orienté Objet
// Il y a plus besoin de recharger à chaque fois les fonctions

class Basket {
    addProduct = document.getElementById('addToCart');
    constructor() {  
        this.addProduct?.addEventListener("click", () => {
            // Transformer la chaîne de caractères en objet
            // On enregistre dans une variable se qu'on a récupéré
            let basket = localStorage.getItem("basket");
            // ça va envoyer null parce que par défaut quand l'utilisateur arrive sur le site il a pas encore ajouter de produit dans son panier, du coup le panier n'existe pas dans le localstorage
            // Si oui, ça veux dire que le panier n'existe pas
            if(basket == null) {
                // Retourne un tableau vide
                this.basket = [];
            }
            // Sinon non, ça veut dire que le panier existe
            else {
                // Transforme en objet
                this.basket = JSON.parse(basket);
            }

        })
    
    }

    // Enregistrer les produits dans le localstorage
    // (basket) = paramètre (quelle panier on veut enregistrer)
    save() {
        // Transforme en chaîne de caractères
        localStorage.setItem("basket", JSON.stringify(this.basket));
    }

    // Ajouter un produit
    add(product) {
        // find c'est chercher un élément sur un tableau par rapport à une condition
        // On cherche dans le panier si il y a un produit à l'id est égal à l'id du produit
        let foundProduct = this.basket.find(p => p.id == product.id);
        // Si il existe déjà dans le panier
        if (foundProduct != undefined) {
            // 1 à la quantité
            foundProduct.quantity++;
        } else {
            product.quantity = 1;
            // Ajouter le produit dans le tableau
            this.basket.push(product);
        } 
        this.save();
    }

    // Retirer un produit
    remove(product) {
        // ! = supprimer le produit (== : supprimer tout les produits)
        this.basket = this.basket.filter(p => p.id != product.id);
        this.save();
    }
    
    // Changer la quantité
    changeQuantity(product,quantity) {
        let foundProduct = this.basket.find(p => p.id == product.id);
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity;
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);
            } else {
                this.save();
            }
        }

    }

    // Calcul du total des quantités des produits au panier
    getNumberProduct() {
        let number = 0;
        for(let product of this.basket) {
            number += product.quantity;
        }
        return number;
    }

    // Prix Total au panier
    getTotalPrice() {
        let total = 0;
        for(let product of this.basket) {
            total += product.quantity * product.price;
        }
        return total;
    }

}