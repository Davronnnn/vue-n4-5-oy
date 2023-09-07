import { findElement, renderProducts } from "./helpers.js";
import { BASE_URL } from "./utils.js";

const elCards = findElement(".cards");
const elLoginBtn = findElement("#login-btn");
const header = findElement("header");
const authBtn = findElement("#save");
const emailInput = findElement("#auth-email");
const passwordInput = findElement("#auth-password");

let isLogin = localStorage.getItem("token") ? true : false;

if (isLogin) {
    elLoginBtn.textContent = "Chiqish";
    const newLink = document.createElement("a");
    newLink.href = "./pages/admin.html";
    newLink.textContent = "Admin sahifasi";
    header.appendChild(newLink);
}

authBtn.addEventListener("click", () => {
    const obj = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    const authPost = async () => {
        const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        
        if(data.token){
            localStorage.setItem("token", data.token);

            const newLink = document.createElement("a");
            newLink.href = "./pages/admin.html";
            newLink.textContent = "Admin sahifasi"
            header.appendChild(newLink)
            isLogin = true
            elLoginBtn.textContent = "Chiqish";
            localStorage.setItem("login",true)
        }
       
        
    };
    authPost();
});

elLoginBtn.addEventListener("click", () => {
    // if(!isLogin){
    //     const newLink = document.createElement("a");
    //     newLink.href = "./pages/admin.html";
    //     newLink.textContent = "Admin sahifasi"
    //     header.appendChild(newLink)
    //     isLogin = true
    //     elLoginBtn.textContent = "Chiqish";
    //     localStorage.setItem("login",true)
    // }else{
    //     elLoginBtn.textContent = "Kirish";
    //     header.innerHTML = null;
    //     header.appendChild(elLoginBtn);
    //     isLogin = false;
    //     localStorage.setItem("login",false)
    // }
});

let products = [];

fetch(BASE_URL + "/products")
    .then((res) => res.json())
    .then((res) => {
        // products = res;
        renderProducts(res, elCards);
    })
    .catch((err) => {
        alert(err);
    });

renderProducts(products, elCards);
