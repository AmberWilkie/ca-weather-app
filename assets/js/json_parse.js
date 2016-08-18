// function grabJSON(data) {
//
// }

function JSONParse() {}

JSONParse.prototype.getOWMurl = function(loc) {
  this.lat = loc.lat;
  this.lon = loc.lon;
  var weather_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + loc.lat + '&lon=' + loc.lon + '&appid=ad168bad6ee62955f8e7f93867a2092f';
}

JSONParse.prototype.pull_JSON = function(weather_url) {
  // here we need to get the data from OWM
  // this.loadDoc(weather_url);
  // this.json_string =  $.getJSON(weather_url);
  // console.log(this.json_string);
  return $.ajax({
      dataType: "jsonp",
      url: weather_url,
      type: 'GET',
      cache: false,
      // success: grabJSON(data),
      // success: callback,
      // success: function (data) {
      //   this.grabJSON(data);
      // },
      success: function (data) {
        response = JSON.stringify(data);
        debugger;
        console.log("We got into the 'success' part. Here's the URL: " + weather_url);
        console.log(data);
        console.log(data.base);
        return response;
      },
      error: function (errorData) {
        alert("Couldn't get weather data");
      }
    });

  // JSONParse.prototype.grabJSON = function(data) {
  //   response = JSON.stringify(data);
  //   console.log("We got into the 'success' part. Here's the URL: " + weather_url);
  //   console.log(data);
  //   console.log(data.weather);
  // };
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
