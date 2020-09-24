// do I need to have $(document).ready(function (){ ?
//This is my API key
var APIKey = "4f16bb4b2127dada480f7754acbd4036";
var locationInput = document.getElementById("city-input");
var citiesContainer = document.getElementById("city-names");
var searchBtn = document.getElementById("search-button");

var date = $("#todays-date");

var currentCity = undefined;
// this is where the full list of cities is :
var cities = [];
var currentId = 0;

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

searchBtn.addEventListener("click", addCityToList);

function getWeather() {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" +
    currentCity +
    "&appid=" +
    APIKey;

  //AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET",
  })

    //Here we stor all of the retreived data inside of an object called "response"
    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      //Transfer content to HTML
      $(".city").html(
        "<h3>" + response.name + "</h3>" + dateToday + response.weather.icon
      );
      $(".humidity").text("Humidity: " + response.main.humidity + "%");
      $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
      // add UV index here
      // $(".uv-index"). text("UV Index: " + response.)
      // convert the kelvin to celcius
      var tempF = Math.round(response.main.temp - 273.15);
      // add temp content to html
      $(".temp").html("Temperature: " + tempF + "&degC");

      $();
    });

  function dateToday() {
    var today = moment().format("DD MM YYY");
    $(date).text(today);
  }
  dateToday;
}
