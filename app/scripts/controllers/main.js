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

  	$scope.films = [];


  	var load = function(){
		$scope.films = moviesdb.getFilms();
  	};
  	
    load();

    var save = function(films){
    	moviesdb.saveFilms(films);
    };
	

    $scope.nbAffiche=10;
	$scope.debut=0;

	
	
	$scope.monClick = function(){
		var nouveauFilm ={titre: $scope.titre, comment:$scope.comment};
		$scope.films.push(nouveauFilm);
		$scope.titre='';
		$scope.comment='';
		save($scope.films);
	};

	$scope.active = true;

	$scope.supprimerFilm= function(film){
		$scope.films.splice($scope.films.indexOf(film), 1);
		save($scope.films);
	};
  });
