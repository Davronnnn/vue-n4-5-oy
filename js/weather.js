import { findElement } from "./helpers.js";

const API_KEY = "46351da790226c653537b9628dc20463";
const API = "https://api.openweathermap.org/data/2.5/weather";

const elForm = findElement("#form");
const cards = findElement(".cards");
const template = findElement("#template").content;

class Weather {
    renderCity(data, template, cards) {
        cards.innerHTML = null;
        const newCard = template.cloneNode(true);
        const title = findElement(".card-title", newCard);
        const date = findElement(".card-date", newCard);
        const degree = findElement(".degree", newCard);
        const wind = findElement(".wind", newCard);
        const condition = findElement(".condition", newCard);
        
        title.textContent = data.name;
        date.textContent = "Tuesday 12 September 2023";
        degree.textContent = data.main.temp + "°c";
        wind.textContent = data.wind.speed + "km/h";
        condition.textContent = data.weather[0].main;
        cards.appendChild(newCard);
    }

    getData(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                weather.renderCity(data, template, cards);
            });
    }
}
const weather = new Weather();
weather.getData(`${API}?q=tashkent&units=metric&appId=${API_KEY}`)

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputCity = evt.target.city.value;
    weather.getData(`${API}?q=${inputCity}&units=metric&appId=${API_KEY}`)
});
