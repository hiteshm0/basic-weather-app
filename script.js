const cityInput = document.getElementById("cityInput");
const cityDisplay = document.getElementById("cityDisplay");
const humidityDisplay = document.getElementById("humidityDisplay");
const descDisplay = document.getElementById("descDisplay");
const tempDisplay = document.getElementById("tempDisplay");
const weatherForm = document.querySelector("form");
const card = document.getElementById("card");
const apiKey = ""

console.log("hihihi")

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherData();
});

function getWeatherData(){
    const city = cityInput.value;
    if( city){
        console.log("hi");
        document.getElementById("errorDisplay").textContent = "";
        cityDisplay.textContent = city;
        displayWeatherInfo({temp: 26, humidity: 70, desc: "Cloudy"})
        console.log("bye");
     } else{
        displayErrorMessage("Enter valid city name.");
    }
}

function displayWeatherInfo(data){
    tempDisplay.textContent = `${data.temp} Celsius`;
    humidityDisplay.textContent = `${data.humidity}`;
    descDisplay.textContent = data.desc;
}

function displayErrorMessage(error){
    cityDisplay.textContent = "";
    tempDisplay.textContent = "";
    humidityDisplay.textContent = "";
    descDisplay.textContent = "";

    document.getElementById("errorDisplay").textContent = error;
}