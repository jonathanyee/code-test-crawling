'use strict';

/* Controllers */

angular.module('FreePeople.controllers', []).
  controller('ScarvesController', ['$scope', '$http',
    function($scope, $http) {
        $scope.filters = [
                    {name: 'Sort by Name ASC', id: 0},
                    {name: 'Sort by Name DSC', id: 1},
                    {name: 'Sort by Price ASC', id: 2},
                    {name: 'Sort by Price DSC', id: 3},
                ];
        $scope.filter = $scope.filters[0];
        $scope.applyFilter = function() {
            console.log($scope.filter);
        };

        $http.get('http://localhost:8000/freepeople/data.json').
            success(function(data) {
                $scope.scarves = data;

                for (var i = 0; i < $scope.scarves.length; i++) {
                    // use smaller photo
                    $scope.scarves[i].photo = $scope.scarves[i].photo.replace('$detail-item$', '$browse-lt$');
                }
            });
  }]);