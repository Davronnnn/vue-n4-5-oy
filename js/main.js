function findElement(element, parent = document) {
    return parent.querySelector(element);
}

const elCards = findElement(".cards");

data.forEach((element) => {
    console.log(element);

    const newCard = document.createElement("div");

    newCard.className = "col-3";

    newCard.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${element.image}" alt="${element.title}" />
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.rating.rate} (${element.rating.count} baho)</p>
                <p class="card-text">${element.price}</p>
            </div>
        </div>
    `;

    elCards.appendChild(newCard)

});
