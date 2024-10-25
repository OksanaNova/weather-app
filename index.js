const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "93b0c311a5275c1a0bd98a190010e226"
}

const input = document.querySelector("#input");

input.addEventListener("keypress", enter);

function enter(e) {
    if(e.keyCode = 'enter') {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result) {
    
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    const myDate = new Date();
    let displayDate = document.querySelector('#date');

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekDays[myDate.getDay()];

    let date = myDate.getDate();

    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = allMonths[myDate.getMonth()];

    let year = myDate.getFullYear();

    displayDate.textContent = `${day}` + " " + `${date}` + " " +  `${month}` + " " + `${year}`;
}
