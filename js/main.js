import  {findElement,renderProducts} from "./helpers.js"

const elCards = findElement(".cards");
let favoriteProducts = [];
let products = [];

const BASE_URL = "https://64f0b0178a8b66ecf77a03ee.mockapi.io"

fetch(BASE_URL+"/products")
    .then((res) => res.json())
    .then((res) => {
        // products = res;
        renderProducts(res, elCards);
       
    })
    .catch((err) => {
        alert(err);
    });




renderProducts(products, elCards);

// elCards.addEventListener("click", (evt) => {
//     if (evt.target.matches("path")) {
//         const id = Number(evt.target.dataset.id);

//         cachedData = cachedData.map((product) => {
//             if (product.id === id) {
//                 if (!product.isFavorite) { // false
//                     favoriteProducts.push(product);
//                 } else {
//                     favoriteProducts = favoriteProducts.filter((element) => element.id !== id);
//                 }
//                 product.isFavorite = !product.isFavorite;
//             }
//             return product;
//         });
//         renderProducts(cachedData, elCards);
//         localStorage.setItem("products", JSON.stringify(cachedData));

//         localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
//     }
// });
