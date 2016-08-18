function JSONParse() {}

JSONParse.prototype.pull_JSON = function(loc) {
  // here we need to get the data from OWM
  this.lat = loc.lat;
  this.lon = loc.lon;
  var weather_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + loc.lat + '&lon=' + loc.lon + '&appid=ad168bad6ee62955f8e7f93867a2092f';
  // this.loadDoc(weather_url);
  // this.json_string =  $.getJSON(weather_url);
  // console.log(this.json_string);
  var response = {};
  this.json_string = {};
  $.ajax({
      dataType: "jsonp",
      url: weather_url,
      type: 'GET',
      cache: false,
      success: function (data) {
        response = data;
        console.log("We got into the 'success' part. Here's the URL: " + weather_url);
        console.log(data);
        console.log(data.weather);
      },
      error: function (errorData) {
        alert("Couldn't get weather data");
      }
    });
    
};

// JSONParse.prototype.loadDoc = function(url) {
//   console.log("At least we're in loadDoc now");
//   var xhttp;
//   xhttp=new XMLHttpRequest();
//   // xhttp.onreadystatechange = function() {
//   //     if (xhttp.readyState == 4 && xhttp.status == 200) {
//   //         cfunc(xhttp);
//   //     }
//   // };
//   xhttp.open("GET", url, true);
//   // xhttp.getJSON(); // fuck me
//   debugger;
//
// };
