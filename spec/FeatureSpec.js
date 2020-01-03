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

  it('planes can takeoff', function() {
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  })

  it('stops planes takeoff when weather is stormy', function() {
    plane.land(airport)
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(); }).toThrowError('cannot takeoff when stormy');
    expect(airport.planes()).toContain(plane);
  });
});