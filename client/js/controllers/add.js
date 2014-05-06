angular.module('applicationsTrackerApp.controllers')
    .controller('AddCtrl', ['$scope', '$location', 'positionsStorage', function($scope, $location, positionsStorage) {
        $scope.submit = function() {
            var position = $scope.position;
            positionsStorage.save(new Position(position.url, position.company, position.role, position.date));
            $location.path('/list');
        };

        $scope.position = {
            date: new Date()
        };
    }]);
