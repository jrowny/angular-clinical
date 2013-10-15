'use strict';

angular.module('clinicalApp').directive('onKeyupFn', function() {
    return function(scope, elm, attrs) {
        //Evaluate the variable that was passed
        //In this case we're just passing a variable that points
        //to a function we'll call each keyup
        var keyupFn = scope.$eval(attrs.onKeyupFn);
        elm.bind('keyup', function(evt) {
            //$apply makes sure that angular knows
            //we're changing something
            scope.$apply(function() {
                keyupFn.call(scope, evt.which);
            });
        });
    };
});