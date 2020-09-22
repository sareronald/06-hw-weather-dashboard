//This is our API key
var APIKey = "4f16bb4b2127dada480f7754acbd4036";
var location = document.getElementById("#city-names");
var searchBtn = document.getElementById("#search-button");

var cities = [];
var currentId= 0;

// put this in an event handler - to collect city name
function addCityToList(event) {
    event.preventDefault();
    localStorage.setItem("city-names", location);
    var newLocation = location.value;
    var div = docment.createElement("<div>");
    div.innerHTML = newLocation;
    cities.push({newLocation: newLocation});
    location.append(div);
}

searchBtn.addEventListener("click", addCityToList);


// function getWeather
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=" + location + "&appid=" + APIKey;

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