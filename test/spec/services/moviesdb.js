'use strict';

describe('Service: MoviesDB', function () {

  // load the service's module
  beforeEach(module('movieApp'));

  // instantiate service
  var MoviesDB;
  beforeEach(inject(function (_MoviesDB_) {
    MoviesDB = _MoviesDB_;
  }));

  it('should do something', function () {
    expect(!!MoviesDB).toBe(true);
  });

});
