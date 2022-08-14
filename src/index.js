let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

let date = document.querySelector("#date");
date.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("h3");
    tempElement.innerHTML = `${temperature} degrees`;
    let iconElement =
        document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = ` ${response.data.weather[0].description}`;
    
    
}

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let yourCity = document.querySelector("#city");
    yourCity.innerHTML = `${searchInput.value}`;
    let apiKey = "409ea639a8de3a4a4c36b8b3bf5aa43f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("click", search);
