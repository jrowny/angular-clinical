'use strict';

angular.module('clinicalApp').directive('newAuth', function() {
	return {
		restrict: 'A',
		scope: {
			// arguments here
			providers: '=',
			requestTypeDropDown: '=',
			testValue: '='
		},
		templateUrl: 'views/new.auth.html',
 
		link: function(scope, elem, attrs) {
			
		}
	};
});