$(document).ready(function() {
    var lon,
        lat,
        apiKey = "f44d93e35972d2dc326a9b9c058f0f6d";        //enter API key here
        // get geo-location data
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
                lon = position.coords.longitude;
    		    lat = position.coords.latitude;
                var apiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="+ lon + "&units=metric&appid=" + apiKey;
                // get local weather - Open Weather JSON
                $.getJSON(apiCall, function(data){
                    weather = data.weather[0].description;
                    city = data.name;
                    temp = data.main.temp.toFixed(0);
                    console.log(temp);
                });
                //success
                //error
            });
            // get local weather
            //success
            //error
        }

    // display weather
        // change icon based on current weather

    // convert Fahrenheit to Celsius


});
