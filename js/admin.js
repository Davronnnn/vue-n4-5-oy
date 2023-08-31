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


const elForm  = findElement("#form");
const elImage = findElement("#image")


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newProduct = JSON.stringify({
        title:evt.target.title.value,
        // description: evt.target.description.value,
        image: elImage.value,
        category:evt.target.category.value,
        price: evt.target.price.value,
        createdAt: new Date().getTime()
    });


    fetch(BASE_URL + "/products/",{
        method: "POST",
        body:newProduct
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })

   
})