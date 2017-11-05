/*********************
		API Request
*********************/

// Function to display all of the JSON data in console in order to determine where the heck to look for the data we want

function reqListener() = {
  console.log(this.responseText)
}

// API request for weather
var xhr = new XMLHttpRequest()
xhr.addEventListener("load", reqListener)
xhr.open("GET", "https://fcc-weather-api.glitch.me/")

xhr.send()

// console.log(xhr.status);
// console.log(xhr.statusText);
			
weatherData = JSON.parse(xhr.responseText)

function displayTime() {
