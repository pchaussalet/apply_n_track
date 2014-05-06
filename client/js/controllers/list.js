angular.module('applicationsTrackerApp.controllers')
    .controller('ListCtrl', ['$scope', '$location', 'positionsStorage', function($scope, $location, positionsStorage) {
        $scope.loadPositions = function() {
            $scope.positions = positionsStorage.load();
        };

        $scope.addPosition = function() {
            $location.path('/add')
            $scope.loadPositions();
        }

        $scope.positions = [];

        $scope.loadPositions();
    }]);
