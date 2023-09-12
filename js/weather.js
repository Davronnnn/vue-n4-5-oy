import { findElement } from "./helpers.js";

const speech = new webkitSpeechRecognition();
speech.continuous = true;

const startBtn = findElement("#start-btn");


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
            .then((res) => {
 
                if(res.status !== 200){
                    throw new Error("Shahar topilmadi")
                }
                return res.json()
            })
            .then((data) => {
                weather.renderCity(data, template, cards);
            }).catch((err) => {
                console.log(err)
                alert(err)
            })
    }
}
const weather = new Weather();
weather.getData(`${API}?q=tashkent&units=metric&appId=${API_KEY}`);

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputCity = evt.target.city.value;
    weather.getData(`${API}?q=${inputCity}&units=metric&appId=${API_KEY}`);
});


startBtn.addEventListener("click", () => {
    speech.start();

    speech.onresult = (event) => {
        const text = event.results[0][0].transcript;
        document.body.style.backgroundColor = text;
      
        weather.getData(`${API}?q=${text}&units=metric&appId=${API_KEY}`)
        speech.stop()
    };
});