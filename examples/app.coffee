module = angular.module 'app', [
    'classy'
    'classy-on'
]

module.classy.controller
    name: 'MainController'
    inject: ['$scope', '$element', '$attrs', '$rootScope']
    
    broadcastMessage: (message) ->
        @$rootScope.$broadcast 'specialEvent', message
        return
        
module.classy.controller 
    name: 'ClassyController'
    inject: ['$scope', '$element', '$attrs']
    
    init: ->
        @$.message = "None"
        return
        
    on: 
        specialEvent: (event, message) ->
            @$.message = message
            return
    