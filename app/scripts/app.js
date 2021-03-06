'use strict';

/**
 * @ngdoc overview
 * @name kcrazeApp
 * @description
 * # kcrazeApp
 *
 * Main module of the application.
 */
angular
  .module('kcrazeApp', [
    'kcraze.moltin',

    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'kcrazeApp'

  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store',
        resolve:{
          categories: function($q, MoltinAuth){
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin){
              moltin.Category.List(null, function (categories){
                deferred.resolve(categories);
                console.log("im here");

              });

            });
            return deferred.promise;
          }
        }
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
