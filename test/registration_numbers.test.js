describe('Returns Cape Town because startswith CA', function() {

  it("should  not take the registration number twice.", function() {
    var registration = Registration();

    registration.addRegNumber('CY 124567');
    registration.addRegNumber('CY 124567');
    assert.deepEqual(registration.getRegMapKeys(), {'CY 124567' : 0});

  });

  it("should not add invalid reg numbers", function() {
    var registration = Registration();
    registration.addRegNumber('CC 124567');
    assert.notEqual(registration.getRegNum(), {'CC 124567':0});

  });
it("should be able to add the registration number that start with CK.", function() {
    var registration = Registration();
    registration.addRegNumber('CK 124567')
    assert.deepEqual(registration.getRegMapKeys(), {'CK 124567': 0})
  });
  it("should be able to add the registration that starts CA", function() {
    var registration = Registration();
    registration.addRegNumber('CA 124567');

    assert.deepEqual(registration.getRegMapKeys(), {'CA 124567':0});
  });
  it("should be able to take all from Cape Town.", function() {
    var registration = Registration();
    registration.addRegNumber('CA 124567')
    registration.addRegNumber('CA 124568')
    assert.equal(registration.findFrom('Cape Town'), "2");
  });
  it("should be able to print true when added allowed registration number.", function() {
    var registration = Registration();
    assert.equal(registration.addRegNumber('CA 124567'), true);
  });

});
