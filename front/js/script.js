const products = [
    {
      "colors": ["Blue", "White", "Black"],
      "_id": "107fb5b75607497b96722bda5b504926",
      "name": "Kanap Sinopé",
      "price": 1849,
      "imageUrl": "../../../back/images/kanap01.jpeg",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "altTxt": "Photo d'un canapé bleu, deux places"
    },
    {
      "colors": ["Black/Yellow", "Black/Red"],
      "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
      "name": "Kanap Cyllène",
      "price": 4499,
      "imageUrl": "../../../back/images/kanap02.jpeg",
      "description": "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
      "altTxt": "Photo d'un canapé jaune et noir, quattre places"
    },
    {
      "colors": ["Green", "Red", "Orange"],
      "_id": "055743915a544fde83cfdfc904935ee7",
      "name": "Kanap Calycé",
      "price": 3199,
      "imageUrl": "../../../back/images/kanap03.jpeg",
      "description": "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
      "altTxt": "Photo d'un canapé d'angle, vert, trois places"
    },
    {
      "colors": ["Pink", "White"],
      "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
      "name": "Kanap Autonoé",
      "price": 1499,
      "imageUrl": "kanap04.jpeg",
      "description": "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
      "altTxt": "Photo d'un canapé rose, une à deux place"
    },
    {
      "colors": ["Grey", "Purple", "Blue"],
      "_id": "8906dfda133f4c20a9d0e34f18adcf06",
      "name": "Kanap Eurydomé",
      "price": 2249,
      "imageUrl": "kanap05.jpeg",
      "description": "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
      "altTxt": "Photo d'un canapé gris, trois places"
    },
    {
      "colors": ["Grey", "Navy"],
      "_id": "77711f0e466b4ddf953f677d30b0efc9",
      "name": "Kanap Hélicé",
      "price": 999,
      "imageUrl": "kanap06.jpeg",
      "description": "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
      "altTxt": "Photo d'un canapé gris, deux places"
    },
    {
      "colors": ["Red", "Silver"],
      "_id": "034707184e8e4eefb46400b5a3774b5f",
      "name": "Kanap Thyoné",
      "price": 1999,
      "imageUrl": "kanap07.jpeg",
      "description": "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
      "altTxt": "Photo d'un canapé rouge, deux places"
    },
    {
      "colors": ["Pink", "Brown", "Yellow", "White"],
      "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
      "name": "Kanap orthosie",
      "price": 3999,
      "imageUrl": "kanap08.jpeg",
      "description": "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
      "altTxt": "Photo d'un canapé rose, trois places"
    }
  ];

function listproducts (product) {
  
  // 0. récupérer l'ancre dans la page
  let items = document.getElementById("items")

  for (let product of products) {

    // 1. creer l'element a ajouter a la page
    let article = document.createElement("article")

    let images = document.createElement("img")
    let noms = document.createElement('h3')
    let descriptions = document.createElement('p') 
    let bouton = document.createElement('button')
    
    let prix = document.createElement('p')
    let couleurs = document.createElement('p')
    let texte = document.createElement('p')
    let id = document.createElement('p')

    // 2. modifier l'element a ajouter a la page
    images.innerText = product.imageUrl
    noms.innerText = product.name
    descriptions.innerText = product.description 
    bouton.innerText= 'Voir produit'

    prix.innerText = product.price
    couleurs.innerText = product.colors
    /*texte.innerText = product.altTxt
    id.innerText = product._id*/

    // 3. ajouter l'element à la page
    items.appendChild(article)

    items.appendChild(images)
    items.appendChild(noms)
    items.appendChild(descriptions)
    items.appendChild(bouton)

    items.appendChild(prix)
    items.appendChild(couleurs)
    items.appendChild(texte)
    items.appendChild(id)

    /***Images***/
    images.setAttribute("src", listproducts.imageUrl);
    images.setAttribute("alt", listproducts.altTxt);

    /***Chaque objet doit être dans un article***/
    article.appendChild(images);
    article.appendChild(noms);
    article.appendChild(descriptions);
    article.appendChild(prix);

    /*images.src = "../../../back/images/kanap01.jpeg"*/
    items.setAttribute("style", "text-align:center");
    images.style.width = '20%';
    images.style.height = 'auto';

    console.log(product)
     
  }

}

listproducts()

async function createListProducts() {
  await fetch('http://localhost:3000/api/products') 
    .then((listProductsEnJson) => listProductsEnJson.json()) 
    .then((product) => listproducts(product)) 
}
  
createListProducts()