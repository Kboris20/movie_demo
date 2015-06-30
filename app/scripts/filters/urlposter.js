'use strict';

/**
 * @ngdoc filter
 * @name movieApp.filter:urlPoster
 * @function
 * @description
 * # urlPoster
 * Filter in the movieApp.
 */
angular.module('movieDemoApp')
  .filter('urlPoster', function (moviesdb) {
    return function (posterURL) {
      if (posterURL){
        return 'http://image.tmdb.org/t/p/w185' + posterURL;
      }
      return '/images/noposter.jpg';
    };
  });
