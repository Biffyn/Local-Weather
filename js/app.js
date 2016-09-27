$(document).ready(function() {
    var lon;
    var lat;
    var apiKey = "5924d8f1cb9c28e04a6bfe660e704c11";        //enter API key here
    // get geo-location data
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            lon = position.coords.longitude;
		    lat = position.coords.latitude;
            var apiCall = "https://api.darksky.net/forecast/" + apiKey + "/" + lat + "," + lon + "?callback=?";
            // get local weather - Open Weather JSON
            $.getJSON(apiCall, function(res, err){
                console.log(res);
                    // save what is needed from the response to vars
                     weather = res.currently.summary;
                     city = res.timezone;
                     temp = res.currently.temperature.toFixed(1);
                     // convert Fahrenheit to Celsius
                     cel = ((temp -32) * (5/9)).toFixed(1);
                     // display weather
                     $("#city").html(city);
                     $("#temp").html(cel + " &deg;" + "C");
                     $("#weather").html(weather);

                     $("#celsius").click(function(){
                         $("#temp").html(cel + " &deg;" + "C");
                     });
                     $("#fahrenheit").click(function(){
                         $("#temp").html(temp + " &deg;" + "F");
                     });

                    var icon = res.currently.icon;
                    var skycons = new Skycons({
                          "color": "#FFF"
                    });
                    skycons.set("weather-icon", icon);
                    skycons.play();
            }); // end getJSON
        }); // end navigator.geolocation.getCurrentPosition(function(position)
    } // end if (navigator.geolocation)

    //change active state of button when changing temp format
    $("#fahrenheit").click(function(){
        $("#celsius").removeClass('active');
        $("#fahrenheit").addClass('active');
    });
    $("#celsius").click(function(){
        $("#fahrenheit").removeClass('active');
        $("#celsius").addClass('active');
    });

}); //end ready
