describe('JSON partial', function() {
  beforeEach(function() {
    // We can load fixtures using this method:
    //jasmine.getFixtures().clearCache();
    //var f = jasmine.getFixtures();
    //f.fixturesPath = 'base/spec/fixtures';
    //f.load('sample_partial.html');
    //$.holdReady(false);

    // Or this:
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('sample_partial.html');
    $.holdReady(false);
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  it("obtains user location when the page loads", function() {
    expect(user_loc).toEqual("location");
  });


  describe("grabs JSON", function() {
    beforeEach(function() {
      // We can load fixtures using this method:
      //jasmine.getFixtures().clearCache();
      //var f = jasmine.getFixtures();
      //f.fixturesPath = 'base/spec/fixtures';
      //f.load('sample_partial.html');
      //$.holdReady(false);

      // Or this:
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
