'use strict';

/**
 * @ngdoc overview
 * @name movieDemoApp
 * @description
 * # movieDemoApp
 *
 * Main module of the application.
 */
angular
  .module('movieDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movie/:id/:hello', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
