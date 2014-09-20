# Test Data

app = angular.module 'classyOnTest', [
    'classy'
    'classy-on'
]
        
app.classy.controller
    name: 'OnController'
   
    inject: ['$scope']
   
    on: 
        'testEvent': ->
            @$.eventTriggered = true
            return
        
# Tests

describe 'Classy on (classy-on.coffee)', ->
    beforeEach module 'classyOnTest'
    
    onController = null
    scope = null
    rootScope = null
    
    beforeEach ->
        inject ($controller, $rootScope) ->
            rootScope = $rootScope
            scope = $rootScope.$new()
            onController = $controller 'OnController', 
                $scope: scope
            return
        return
    
    it 'should register the event', ->
        expect(scope.eventTriggered).toBeFalsy()
        rootScope.$broadcast 'testEvent'
        rootScope.$digest()
        expect(scope.eventTriggered).toBeTruthy()
        return
    return