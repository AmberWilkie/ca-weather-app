describe("Get JSON string from OWM", function() {
  var json;
  var lat;
  var loc;

  beforeEach(function() {
    json = new JSONParse();
    loc = {lat: 57.71, lon: 11.97};
    expected_url = 'http://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&appid=ad168bad6ee62955f8e7f93867a2092f';
    // jasmine.Ajax.install();
  });

  afterEach(function () {
    // jasmine.Ajax.uninstall();
  });

  xit('makes a request to the correct url', function() {
     spyOn($, 'ajax');
     json.pull_JSON(loc);
     expect($.ajax.calls.mostRecent().args[0].url).toEqual(expected_url);
   });

  xit('sets response as the JSON string', function() {
    response = json.pull_JSON(loc);
    debugger;
    expect(response.id).toEqual(2698738);
  });

  xit('should make a real AJAX request', function() {
    var callback = jasmine.createSpy();
    json.pull_JSON(loc, callback);
    waitsFor(function() {
      return callback.callCount > 0;
    });
    runs(function() {
      expect(callback).toHaveBeenCalled();
    });
  });

});

describe("Parse JSON string for data", function() {

  beforeEach(function () {
    var json_string = {"coord":{"lon":11.97,"lat":57.71},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"cmc stations","main":{"temp":294.26,"pressure":1025.14,"humidity":95,"temp_min":294.26,"temp_max":294.26},"wind":{"speed":6.68,"deg":45,"gust":6.68},"rain":{"3h":0.005},"clouds":{"all":12},"dt":1471521271,"sys":{"type":3,"id":9444,"message":0.0029,"country":"SE","sunrise":1471491875,"sunset":1471545927},"id":2689287,"name":"Nordstaden","cod":200}
  });

  xit('should return weather description', function() {

  });
});
