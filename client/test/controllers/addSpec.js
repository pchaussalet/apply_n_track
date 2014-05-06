describe('AddCtrl', function() {
    var addCtrl, scope, savedPosition;
    var positionsStorage = {
        save: function(position) { savedPosition = position; return {then: function() {}} }
    };
    beforeEach(module('applicationsTrackerApp.controllers'));
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        addCtrl = $controller('AddCtrl', {
            $scope: scope,
            positionsStorage: positionsStorage
        })
    }));

    it("should start with an empty position except the current date", function() {
        expect(scope.position).not.toBe(null);
        expect(scope.position.date).not.toBe(null);
        var currDate = new Date();
        expect(scope.position.date.getYear()).toEqual(currDate.getYear());
        expect(scope.position.date.getMonth()).toEqual(currDate.getMonth());
        expect(scope.position.date.getDay()).toEqual(currDate.getDay());
    });

    it("should save new position when submitting form", function() {
        scope.position.url = 'http://foo.net/bar?baz';
        var currDate = new Date();
        scope.position.date = currDate;

        scope.submit();

        expect(savedPosition).not.toBe(null);
        expect(savedPosition.url).not.toBe(null);
        expect(savedPosition.url).toEqual('http://foo.net/bar?baz');
        expect(savedPosition.urldate).not.toBe(null);
        expect(savedPosition.date).toEqual(currDate);
    });

});
