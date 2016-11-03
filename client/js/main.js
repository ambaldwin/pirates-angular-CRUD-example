var app = angular.module('pirates', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/pirates.html',
        controller: 'piratesController'
      })
      .when('/pirate/:id', {
        templateUrl: '../partials/pirate.html',
        controller: 'piratesController'
      })
});
