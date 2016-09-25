$(document).ready(function() {
    var lon;
    var lat;
    var apiKey = "f44d93e35972d2dc326a9b9c058f0f6d";        //enter API key here
    // get geo-location data
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            lon = position.coords.longitude;
		    lat = position.coords.latitude;
            var apiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="+ lon + "&units=metric&appid=" + apiKey;
            // get local weather - Open Weather JSON
            console.log(apiCall);
            $.getJSON(apiCall, function(res){
                console.log(res);
                // save what is needed from the response to vars
                 id = res.weather[0].id;
                 weather = res.weather[0].description;
                 city = res.name;
                 temp = res.main.temp.toFixed(0);
                 // display weather
                 $("#city").html(city);
                 $("#temp").html(temp);
                 $("#weather").html(weather);
            });
        });
    }
        // change icon based on current weather

    // convert Fahrenheit to Celsius
});
