describe("JSON Parse", function() {
  var json;
  var lat;
  var loc;

  beforeEach(function() {
    json = new JSONParse();
    loc = {lat: 57.71, lon: 11.97};
  });

  it("reads loc", function() {
    json.pull_JSON(loc);
    expect(json.lat).toBe (57.71);
  });

  it("has a set of data from OWM", function() {
    json.pull_JSON(loc);
    expect(json.response).toEqual("cmc stations");
  });

});
