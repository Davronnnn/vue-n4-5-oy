const elForm  = findElement("#form");
const elImage = findElement("#image")


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();


    const newProduct = JSON.stringify({
        title:evt.target.title.value,
        description: evt.target.description.value,
        image: elImage.value,
        category:evt.target.category.value,
        price: evt.target.price.value
    });


    console.log(newProduct)
    fetch("https://fakestoreapi.com/products",{
        method: "POST",
        body:newProduct
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })

   
})