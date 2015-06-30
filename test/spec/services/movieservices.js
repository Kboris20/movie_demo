'use strict';

describe('Service: MovieServices', function () {

  // load the service's module
  beforeEach(module('movieApp'));

  // instantiate service
  var MovieServices;
  beforeEach(inject(function (_MovieServices_) {
    MovieServices = _MovieServices_;
  }));

  it('should do something', function () {
    expect(!!MovieServices).toBe(true);
  });

});
