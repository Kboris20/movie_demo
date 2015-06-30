'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('MainCtrl', function ($scope, moviesdb) {

  	var load = function(){
		$scope.films = JSON.parse(localStorage.getItem ('mes_films'));
  	};
  	
    load();

    $scope.nbAffiche=10;
	$scope.debut=0;

	
	$scope.monClick = function(){
		$scope.fims.push(nouveauFilm);
		$scope.nbAffiche='';
	};

	$scope.active = true;

	$scope.supprimerFilm= function(film){
		$scope.films.splice($scope.films.indexOf(film), 1);
	};
  });
