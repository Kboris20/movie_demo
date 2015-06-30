'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($scope, $routeParams, moviesdb) {

    $scope.id = $routeParams.id;
    
    var films=moviesdb.getFilms();

    $scope.film = films[$scope.id];


  });
