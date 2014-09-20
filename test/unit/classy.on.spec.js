(function() {
  var app;

  app = angular.module('classyOnTest', ['classy', 'classy-on']);

  app.classy.controller({
    name: 'OnController',
    inject: ['$scope'],
    on: {
      'testEvent': function() {
        this.$.eventTriggered = true;
      }
    }
  });

  describe('Classy on (classy-on.coffee)', function() {
    var onController, rootScope, scope;
    beforeEach(module('classyOnTest'));
    onController = null;
    scope = null;
    rootScope = null;
    beforeEach(function() {
      inject(function($controller, $rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        onController = $controller('OnController', {
          $scope: scope
        });
      });
    });
    it('should register the event', function() {
      expect(scope.eventTriggered).toBeFalsy();
      rootScope.$broadcast('testEvent');
      rootScope.$digest();
      expect(scope.eventTriggered).toBeTruthy();
    });
  });

}).call(this);
