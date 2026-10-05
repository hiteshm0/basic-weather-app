const cityInput = document.getElementById("cityInput");
const cityDisplay = document.getElementById("cityDisplay");
const humidityDisplay = document.getElementById("humidityDisplay");
const descDisplay = document.getElementById("descDisplay");
const tempDisplay = document.getElementById("tempDisplay");
const weatherForm = document.querySelector("form");
const card = document.getElementById("card");
const errorDisplay = document.getElementById("errorDisplay");

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if(city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error) {
            displayErrorMessage(error.message || error);
        }
    } else {
        displayErrorMessage("Enter valid city name.");
    }
    
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    errorDisplay.textContent = "";

    cityDisplay.textContent = data.name;
    tempDisplay.textContent = `${data.main.temp}°C`;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    descDisplay.textContent = data.weather[0].description;
}

function displayErrorMessage(error){
    cityDisplay.textContent = "";
    tempDisplay.textContent = "";
    humidityDisplay.textContent = "";
    descDisplay.textContent = "";

    errorDisplay.textContent = error;
}