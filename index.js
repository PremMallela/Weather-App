const apiKey= "4ecf051dcd810ce3c0c7eb8ef8a40873";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function checkWeather(cityName){
    const response= await fetch(apiURL + cityName + `&appid=${apiKey}`); //API request and stored in as a response.
    const errorToggle = (response.status == 404)?"block":"none";
    const weatherInfoToggle = (response.status == 404)?"none":"block";

        document.querySelector(".error").style.display=`${errorToggle}`;
        document.querySelector(".weather").style.display=`${weatherInfoToggle}`;

    var data = await response.json();  //Object in JSON.
    console.log(data);

    document.querySelector(".temp").textContent= Math.round(data.main.temp)+"°C";
    document.querySelector(".city").textContent= data.name;
    document.querySelector(".humidity").textContent= data.main.humidity+" %";
    document.querySelector(".wind").textContent= data.wind.speed+" km" ;

    const imgSrc= data.weather[0].main.toLowerCase();   //Dynamic content from the weather API.

    document.getElementById("img-icon").setAttribute("src", `./Assets/${imgSrc}.png`);
    document.getElementById("img-icon").setAttribute("alt", `${imgSrc}`);
}

 document.querySelector(".search button").addEventListener("click",()=>{
    var inputField = document.querySelector(".search input");
    checkWeather(inputField.value);
 })

