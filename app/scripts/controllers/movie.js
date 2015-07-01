'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MovieCtrl', function ($scope, $routeParams, moviesdb, $http, $rootScope) {
  
  $rootScope.moviesdb = moviesdb
   var id = $routeParams.id;

     $http.get('http://amc.ig.he-arc.ch:3003/movie/'+id+'?append_to_response=similar,releases,credits')
      .success(function(data){
        $scope.film = data;
        $rootScope.bgImage = $scope.film.backdrop_path;
      });
      




  });
