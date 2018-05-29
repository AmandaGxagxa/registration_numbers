describe('add Registration Numbers function', function() {

  it("should  not take the registration number twice.", function() {
    var registration = Registration();

    registration.addRegNumber('CY 124567');
    registration.addRegNumber('CY 124567');
    assert.deepEqual(registration.getRegMapKeys(), {'CY 124567' : 0});

  });

  it("should not add invalid registration numbers", function() {
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

  it("should be able to print true when added allowed registration number.", function() {
    var registration = Registration();
    assert.equal(registration.addRegNumber('CA 124567'), true);
  });

});

describe('Filter Function', function(){
  it('Should take all egistration numbers added', function(){
    var factory = Registration();
    factory.addRegNumber('CK 124567')
    factory.addRegNumber('CA 124567')
    factory.addRegNumber('CL 124568')

    assert.deepEqual(factory.findFrom('All'), ['CK 124567','CA 124567','CL 124568'])
  });
  it("should be able to take only registrations from Cape Town.", function() {
    var registration = Registration();
    registration.addRegNumber('CJ 124567')
    registration.addRegNumber('CA 124567')
    registration.addRegNumber('CA 124568')
    assert.deepEqual(registration.findFrom('CA'), ['CA 124567', 'CA 124568']);
  });
});
