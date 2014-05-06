angular.module('applicationsTrackerApp.services')
    .factory('positionsStorage', [function () {
        'use strict';
        var STORAGE_KEY = 'applicationTracker-positions';
        return {
            load: function(id) {
                var stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
                if (id) {
                    if (stored) {
                        return stored.filter(function(x) { return x.id == id; }).map(function(x) { return new Position(x); })[0];
                    } else {
                        return null;
                    }
                } else {
                    if (stored) {
                        return stored.map(function(x) { return new Position(x) });
                    } else {
                        return [];
                    }
                }
            },
            save: function(position) {
                var positions = this.load();
                if (!positions) {
                    positions = [];
                }
                positions.push(position);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
            }
        }
    }]);
