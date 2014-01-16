'use strict';


// Declare app level module which depends on filters, and services
angular.module('FreePeople', [
  'ngRoute',
  'FreePeople.filters',
  'FreePeople.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'ScarvesController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
