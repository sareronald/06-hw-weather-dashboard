//This is our API key
var APIKey = "4f16bb4b2127dada480f7754acbd4036";
var locationInput = document.getElementById("city-input");
var citiesContainer = document.getElementById("city-names")
var searchBtn = document.getElementById("search-button");

var currentCity = undefined;
// this is where the full list of cities is :
var cities = [];
var currentId= 0;

// put this in an event handler - to collect city name
function addCityToList(event) {
    event.preventDefault();
    var newLocation = locationInput.value;
    var div = document.createElement("div");
    div.classList.add("card-body");
    div.innerHTML = newLocation;
    cities.push(newLocation);
    localStorage.setItem("city-names", JSON.stringify(cities));
    currentCity = newLocation;
    citiesContainer.append(div);
    getWeather();
}
// so I still need to set up the reading of the local storage
// JSON parse
searchBtn.addEventListener("click", addCityToList);


function getWeather() {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + currentCity + "&appid=" + APIKey;
    
    //AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    //Here we stor all of the retreived data inside of an object called "response"
    .then(function(response){
        console.log(queryURL);
        console.log(response);
        //Transfer content to HTML
        $(".result-city").html("<div>" + response.name + "date</div>");
        $(".result.temp").html("<div>" + response.wind.speed + "</div>");
        $(".humidity").text("Humidity:"+ response.main.humidity);
        // convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        // add temp content to html
        $()
    })
}


