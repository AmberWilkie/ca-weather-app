var user_loc;

var onReadyEvents = function(){
  $('#click_me').click(function() {
  loadJSONstring();
  });
  navigator.geolocation.getCurrentPosition(function(position) {
    user_loc = {lat: position.coords.latitude, lon: position.coords.longitude};
  });
};

var loadJSONstring = function() {
  weather_url = 'http://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&appid=ad168bad6ee62955f8e7f93867a2092f';
  $.ajax({
      dataType: "jsonp",
      url: weather_url,
      type: 'GET',
      cache: false,
      success: function (data) {
        // response = JSON.stringify(data);
        response = data;
        console.log("We got into the 'success' part. Here's the URL: " + weather_url);
        console.log(data);
        console.log(response.id);
        var main = data.weather[0].main;
        $('#main').html(main);
        var desc = data.weather[0].description;
        $('#desc').html(desc);
        var temp = data.main.temp; // Need a conversion from what I think is fucking Kelvin
        $('#temp').html(temp);
        var hum = data.main.humidity; // Need to convert something here too.
        $('#hum').html(hum);
      },
      error: function (errorData) {
        alert("Couldn't get weather data");
      }
    });
};
