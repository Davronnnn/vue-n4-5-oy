const elCards = findElement(".cards");
let cachedFavorites = JSON.parse(localStorage.getItem("favorites"));

let cachedData = JSON.parse(localStorage.getItem("products"));

if (cachedData) {
    renderProducts(cachedData, elCards);
} else {
    renderProducts(data, elCards);
}

elCards.addEventListener("click", (evt) => {
    if (evt.target.matches("path")) {
        const id = Number(evt.target.dataset.id);

        cachedData = cachedData.map((product) => {
            if (product.id === id) {
                if (!product.isFavorite) { // false
                    favoriteProducts.push(product); 
                } else {
                    favoriteProducts = favoriteProducts.filter((element) => element.id !== id);
                }
                product.isFavorite = !product.isFavorite;
            }
            return product;
        });
        renderProducts(cachedData, elCards);
        localStorage.setItem("products", JSON.stringify(cachedData));

        localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
    }
});
