﻿(function() {
  var on_module;

  on_module = angular.module('classy-on', ['classy-core']);

  on_module.classy.plugin.controller({
    name: 'on',
    options: {
      enabled: true
    },
    isActive: function(klass, deps) {
      if (this.options.enabled && angular.isObject(klass.on)) {
        if (!deps.$scope) {
          throw new Error("You need to inject `$scope` to use the watch object");
          return false;
        }
        return true;
      }
    },
    postInit: function(klass, deps, module) {
      var fn, key, _ref;
      if (!this.isActive(klass, deps)) {
        return;
      }
      _ref = klass.on;
      for (key in _ref) {
        fn = _ref[key];
        deps.$scope.$on(key, angular.bind(klass, fn));
      }
    }
  });

}).call(this);
