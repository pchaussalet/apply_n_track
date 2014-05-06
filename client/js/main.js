'use strict';

angular.module('applicationsTrackerApp.controllers', []);
angular.module('applicationsTrackerApp.services', []);
angular.module('applicationsTrackerApp', [
    'ngRoute',
    'applicationsTrackerApp.controllers',
    'applicationsTrackerApp.services'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl:    'views/list.html',
                controller:     'ListCtrl'
            })
            .when('/add', {
                templateUrl:    'views/add.html',
                controller:     'AddCtrl'
            })
            .when('/position/:id', {
                templateUrl:    'views/show.html',
                controller:     'ShowCtrl'
            })
            .otherwise({
                redirectTo:     '/list'
            });
    }]);
