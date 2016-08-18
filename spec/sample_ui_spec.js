describe('JSON partial', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('json_partial.html');
    $.holdReady(false);
  });

  it("obtains user location when the page loads", function() {
    expect(user_loc).toEqual("location");
  });


  describe("grabs JSON", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
      loadFixtures('sample_partial.html');
      $.holdReady(false);
    });
    xit("when button clicked", function() {
      $('#click_me').click();
      expect($('#main').text()).toEqual("Clouds");
    });
  });
});
