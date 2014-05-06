angular.module('applicationsTrackerApp.controllers')
    .controller('ShowCtrl', ['$scope', '$routeParams', 'positionsStorage', function($scope, $routeParams, positionsStorage) {
        $scope.loadPosition = function(id) {
            $scope.position = positionsStorage.load(id);
            $scope.position.date = new Date($scope.position.date).toLocaleDateString();
        };

        $scope.loadPosition($routeParams.id);
    }]);
