'use strict'

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes', function() {
    expect(airport.planes()).toEqual([]);
  });
  
  it('clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});

