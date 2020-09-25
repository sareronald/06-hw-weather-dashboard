//This is my API key
var APIKey = "4f16bb4b2127dada480f7754acbd4036";
var locationInput = document.getElementById("city-input");
var citiesContainer = document.getElementById("city-names");
var searchBtn = document.getElementById("search-button");

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
  getForecast();
}

searchBtn.addEventListener("click", addCityToList);

var storedCities = JSON.parse(localStorage.getItem("city-names"));
// if storedCities is an array and its length in greater than 0 override cities
if (storedCities.length > 0)
  //console.log("the array is empty");

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

      //Here we store all of the retreived data inside of an object called "response"
      .then(function (response) {
        console.log(queryURL);
        console.log(response);
        var date = document.getElementById("todays-date");
        date.textContent = moment().format("DD MM YYYY");
        //Transfer content to HTML
        $("#city").html("<h3>" + response.name + "</h3>");
        $("#todays-icon").html(
          "<img src='https://openweathermap.org/img/wn/" +
            response.weather[0].icon +
            "@2x.png'>"
        );
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
        // add UV index here
        // $(".uv-index"). text("UV Index: " + response.)
        // convert the kelvin to celcius
        var tempT = Math.round(response.main.temp - 273.15);
        // add temp content to html
        $("#temp").html("Temperature: " + tempT + "&degC");

        $();
      });
  }

function getUV() {
  var latitude = response.coord.lat;
  var longitude = response.coord.lat;
  console.log(latitude);
  var gueryURLuv =
    "http://api.openweathermap.org/data/2.5/uvi?" +
    "lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    APIKey;

  //AJAX call to the OpenWeatherMap API - UV index
  $.ajax({
    url: queryURLuv,
    method: "GET",
  })

    // Here we store all of the retreive data inside of an object called "response"
    .then(function (response) {
      cpmsp;
      event.log(queryURLuv);
      console.log(response);
      // Transfer content to HTML
      $("#uv-index").text(response.value);
    });
}

function getForecast() {
  var queryURLf =
    "https://api.openweathermap.org/data/2.5/forecast?" +
    "q=" +
    currentCity +
    "&appid=" +
    APIKey;

  //AJAX call to the OpenWeatherMap API - forecast
  $.ajax({
    url: queryURLf,
    method: "GET",
  })

    //Here we store all of the retreived data inside of an object called "response"
    .then(function (response) {
      console.log(queryURLf);
      console.log(response);
      // Transfer content to HTML
      $(".forecast").html("<h3>" + "5-Day Forecast: " + "</h3>");
      $(".forecast-date").text(response.list[0].dt_txt);
      var tempF = Math.round(response.list[0].main.temp - 273.15);
      $(".forecast-temp").text("Temp:" + tempF + "&degC");
      $(".forecast-humidity").text(
        "Humidity:" + response.list[0].main.humidity + "%"
      );

      for (var i = 0; i <= 4; i++) {
        var newCity = $("<div>");
        newCity.attr("data-name", city[i]);
        newCity.text(city[i]);

        $();
      }
    });
}

// put this into an event handler to collect the forecasts
// function addForcastToList(event){
//   event.presentDefault();
//   var newForecast = document.querySelector(".new-forecast");
//   var div = document.createElement("div");
//   div.classList.add("card-body");
//   div.innerHTML=();
//  localStorage.setItem()

// }
