'use strict';

angular.module('clinicalApp').directive('keyup', function() {
  return {
    restrict: 'A',

    link: function(scope, elem, attrs) {
      console.log(scope);
      var keyupFn = scope.$eval(attrs.onKeyupFn);
      elem.bind('keyup', function(evt) {
        scope.$apply(function() {
          keyupFn.call(scope, evt.which);
        });
      });
    }
  };
});