describe('ListCtrl', function() {
    var listCtrl, scope;
    var positionsStorage = {
        load: function() {
            return [];
        }
    };
    beforeEach(module('applicationsTrackerApp.controllers'));
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        listCtrl = $controller('ListCtrl', {
            $scope: scope,
            positionsStorage: positionsStorage
        })
    }));

    it('should start with an empty jobs list', function() {
        expect(scope.positions).toEqual([]);
    });

    it('should load new positions', function() {
        positionsStorage.load = function() {
            return [{
                id: 'FOO',
                url: 'BAR'
            }];
        };
        expect(scope.positions).toEqual([]);
        scope.loadPositions();
        expect(scope.positions).toEqual([{id: 'FOO', url: 'BAR'}])
    });


});
