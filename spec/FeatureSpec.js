'use strict'

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('instruct planes to land at airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});