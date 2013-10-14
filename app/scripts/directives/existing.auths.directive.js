'use strict';

angular.module('clinicalApp').directive('existingAuths', function() {
	return {
		restrict: 'A',
		scope: {
			// arguments here
		},
		templateUrl: 'views/existing.auths.html',
 
		link: function(scope, elem, attrs) {
			
		}
	};
});