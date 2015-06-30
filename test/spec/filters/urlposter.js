'use strict';

describe('Filter: urlPoster', function () {

  // load the filter's module
  beforeEach(module('movieApp'));

  // initialize a new instance of the filter before each test
  var urlPoster;
  beforeEach(inject(function ($filter) {
    urlPoster = $filter('urlPoster');
  }));

  it('should return the input prefixed with "urlPoster filter:"', function () {
    var text = 'angularjs';
    expect(urlPoster(text)).toBe('urlPoster filter: ' + text);
  });

});
