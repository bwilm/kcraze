'use strict';

/**
 * @ngdoc function
 * @name kcrazeApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the kcrazeApp
 */
angular.module('kcrazeApp')
  .controller('StoreCtrl', function ($scope, categories) {
$scope.categories = categories;
console.log($scope.categories);



  });
