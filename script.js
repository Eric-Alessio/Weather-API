// Variables
var citySearch;
var APIkey = "bcc294f129685e13601e966ee0ba44cb";
var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?";
var forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uviAPI = "https://api.openweathermap.org/data/2.5/uvi?lat=";

var searchHistoryArr = [];

//location
function searchLocation() {
  console.log("hi");
  var citySearch = $("#searchInput").val().trim();
  if (citySearch === "") {
    return;
  }
  $("#searchInput").val("");
  getWeather(citySearch);
  getForecast(citySearch);
  console.log(citySearch);
}

//call weather when the city is searched
function getWeather(search) {
 var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&units=imperial`;

  $.ajax({
    url: queryUrl,
    method: "GET",
    //let's do this
  }).then(function (response) {
    console.log(response);
    $("#current-city").text(response.name);
  });
}

function getForecast(search) {
 var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${APIkey}&units=imperial`;

;

  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

// function getUVI(search) {
//   var queryUrl = `http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=${APIkey}`;
// }
// $.ajax({
//   url: queryUrl,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
//   $("#current-city").text(response.name);
// });
// }

$("#searchButton").on("click", searchLocation);
