var user_loc;

var onReadyEvents = function(){
  $('#click_me').click(function() {
  loadJSONstring();
  getLocation();
  });
};

function getLocation() {
  console.log("We're in the getLocation function");
  if (navigator.geolocation) {
    console.log("if in getLocation");
    navigator.geolocation.getCurrentPosition(function(position) {
      showPosition(position.coords.latitude, position.coords.longitude);
    });
  } else {
    $('#loc').html('Geolocation not available');
  }
}

function showPosition(lat, lon) {
  console.log("Now we're in the showPosition function");
  $('#loc').html(lat + " + " + lon);
}

var loadJSONstring = function() {
  weather_url = 'https://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&appid=ad168bad6ee62955f8e7f93867a2092f';
  $.ajax({
      dataType: "jsonp",
      url: weather_url,
      type: 'GET',
      cache: false,
      success: function (data) {
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
