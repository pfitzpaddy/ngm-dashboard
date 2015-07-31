'use strict';

/**
 * @ngdoc overview
 * @name ngmaterializeDashboardApp
 * @description
 * # ngmaterializeDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('ngmaterializeDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngm',
    'ngm.widget.linklist',
    'ngm.widget.randommsg'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
