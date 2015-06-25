'use strict';

/**
 * @ngdoc function
 * @name movieDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieDemoApp
 */
angular.module('movieDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
