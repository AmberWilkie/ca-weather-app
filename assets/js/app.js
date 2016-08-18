
var onReadyEvents = function(){
  $('#click_me').click(function() {
  loadJSONstring();
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
        // $('#click_me').click(function(data) {
        // var text = JSON.stringify(data.id);
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
var clickHappens = function() {
  $('#click_me').click(function(data) {
    var text = JSON.stringify(data);
    debugger;
    $('#display_message').html(text);
  });
};
