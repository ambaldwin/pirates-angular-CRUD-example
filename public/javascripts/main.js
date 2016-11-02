var app = angular.module('pirates', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './partials/pirates.html',
        controller: 'piratesController'
      })
});
